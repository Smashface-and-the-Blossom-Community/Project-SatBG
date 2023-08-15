//=============================================================================
// Plugin for RPG Maker MZ
// AdjustBuffRate.js
//=============================================================================
/*:
 * @target MZ
 * @plugindesc Allows for adjusting the rate at which stats are buffed/debuffed for each level of buff/debuff
 * @author Kanmuri Aramaki
 * 
 * @help This plugin allows the rate at which stats are buffed/debuffed for each level of buff/debuff.
 * If no value is configured for this plugin, it will fallback to the default behavior.
 * 
 * The MZ engine default buff is 25% per level of buff/debuff. e.g.:
 * * Buff level one is 125% of the base stat, and level two is 150% of the base stat
 * * Debuff level one is 75% of the base state, and level two is 50% of the base stat
 * 
 * @param Buff Rate
 * @type number
 * @min 0.00
 * @decimals 2
 * @desc Percentage of base stat (as a decimal number) that is added to it for each level of buff, e.g. 0.25 is 25%
 * @default 0.25
 */

(() => {
    const pluginParams = PluginManager.parameters('AdjustBuffRate');
    const pluginBuffRate = parseFloat(pluginParams["Buff Rate"]);

    const orig_Game_BattlerBase_paramBuffRate = Game_BattlerBase.prototype.paramBuffRate;
    Game_BattlerBase.prototype.paramBuffRate = function(paramId) {
        if (isNaN(pluginBuffRate)) {
            orig_Game_BattlerBase_paramBuffRate.call(this, paramId);
        }
        else {
            return (this._buffs[paramId] * pluginBuffRate) + 1.0;
        }
    }
})();