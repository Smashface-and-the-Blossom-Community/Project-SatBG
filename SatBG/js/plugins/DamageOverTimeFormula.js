//=============================================================================
// Plugin for RPG Maker MZ
// DamageOverTimeFormula.js
//=============================================================================
/*:
 * @target MZ
 * @plugindesc Allows for setting of formulas for damage over time states, similar to those for damage skills
 * @author Kanmuri Aramaki
 * 
 * @help This plugin reads metadata configuration from the notes field on states to allow for specifying damage formulas.
 * 
 * To specify the damage formula, use <dotdmg>. e.g. <dotdmg:a.atk * 2 - b.def>
 * To optionally apply a variance to the result of that calculation, use <dotdmgvar>. e.g. <dotdmgvar:0.05>
 * 
 * Note:
 * * This only applies when the configured states are applied as a result of battler (party/enemy) actions
 * * The base amount of damage will be computed when the state is applied, but the variance will be re-applied to it on each tick of the damage
 * * If <dotdmg> is not specified, <dotdmgvar> will be ignored.
 * * If <dotdmgvar> is not specified, no variance will be applied
 */

(() => {
    const evalDotFormula = (formula, subject, target, varData) => {
        try {
            const formulaFunc = Function("a", "b", "v", `"use strict"; return (${formula});`);
            const value = formulaFunc(subject, target, varData);
            return isNaN(value) ? 0 : value;
        }
        catch {
            return 0;
        }
    };

    const applyVariance = Game_Action.prototype.applyVariance;

    //Game_BattlerBase
    const orig_Game_BattlerBase_initMembers = Game_BattlerBase.prototype.initMembers;
    Game_BattlerBase.prototype.initMembers = function() {
        orig_Game_BattlerBase_initMembers.call(this);
        this._dotDamage = {};
    };

    const orig_Game_BattlerBase_clearStates = Game_BattlerBase.prototype.clearStates;
    Game_BattlerBase.prototype.clearStates = function() {
        orig_Game_BattlerBase_clearStates.call(this);
        this._dotDamage = {};
    };

    const orig_Game_BattlerBase_eraseState = Game_BattlerBase.prototype.eraseState;
    Game_BattlerBase.prototype.eraseState = function(stateId) {
        orig_Game_BattlerBase_eraseState.call(this, stateId);
        delete this._dotDamage[stateId];
    };

    Game_BattlerBase.prototype.addDotDamage = function(dotDetails) {
        if(this.isStateAffected(dotDetails.id)) {
            this._dotDamage[dotDetails.id] = dotDetails;
        }
    };

    //Game_Battler
    const orig_Game_Battler_regenerateAll = Game_Battler.prototype.regenerateAll;
    Game_Battler.prototype.regenerateAll = function () {
        orig_Game_Battler_regenerateAll.call(this);
        this.processDots();
    };

    Game_Battler.prototype.processDots = function () {
        for (const dotDetails of Object.values(this._dotDamage)) {
            const finalDamage = dotDetails.variance
                ? applyVariance.call(this, dotDetails.damageValue, dotDetails.variance)
                : dotDetails.damageValue;
            if (finalDamage) {
                this.gainHp(finalDamage * -1);
            }
        }
    };

    //Game_Action
    const orig_Game_Action_itemEffectAddNormalState = Game_Action.prototype.itemEffectAddNormalState;
    Game_Action.prototype.itemEffectAddNormalState = function(target, effect) {
        orig_Game_Action_itemEffectAddNormalState.call(this, target, effect);

        if (target.isStateAffected(effect.dataId)) {
            const state = $dataStates[effect.dataId];
    
            if (state.meta.dotdmg) {
                const damageValue = evalDotFormula(state.meta.dotdmg, this.subject(), target, $gameVariables._data);
                if (damageValue) {
                    let dotDetails = {id: effect.dataId, damageValue: damageValue};
                    const variance = parseFloat(state.meta.dotdmgvar)
                    if (!isNaN(variance)) {
                        dotDetails.variance = variance;
                    }
                    target.addDotDamage(dotDetails);
                }
            }
        }
    };
})();