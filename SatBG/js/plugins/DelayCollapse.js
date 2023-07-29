//=============================================================================
// Plugin for RPG Maker MZ
// DelayCollapse.js
//=============================================================================
/*:
 * @target MZ
 * @plugindesc Allows for delaying the collapse effect of an enemy by a given number of frames. e.g. <collapse_delay:220>
 * @author Kanmuri Aramaki
 * 
 */

(() => {
    const _orig_Sprite_Enemy_initialize = Sprite_Enemy.prototype.initialize;
    Sprite_Enemy.prototype.initialize = function(battler) {
        _orig_Sprite_Enemy_initialize.call(this, battler);
        this._collapseDelayCounter = 0;
    }

    const _orig_Sprite_Enemy_initMembers = Sprite_Enemy.prototype.initMembers;
    Sprite_Enemy.prototype.initMembers = function() {
        _orig_Sprite_Enemy_initMembers.call(this);
        this._collapseDelayCounter = 0;
        delete this._collapseDelay;
    }

    let _checkDelayAndUpdateCollapse = function(that, updateFunction) {
        console.log(`_collapseDelayCounter: ${that._collapseDelayCounter}`);

        if (!that._collapseDelay) {
            const rawDelay = that._enemy.enemy().meta.collapse_delay;
    
            if (rawDelay) {
                const delay = parseInt(rawDelay);
                //if rawDelay is not parsable to an int, parseInt returns NaN,
                //which is a false-y value, so we coerce it to 0 if that's the case
                //using the ternary expression below
                that._collapseDelay = delay ? delay : 0;
            }
        }

        if (that._collapseDelayCounter >= that._collapseDelay) {
            updateFunction.call(that);
        }
        else {
            that._collapseDelayCounter++;
            //The effect duration is decremented before this is called on each frame,
            //until the duration reaches zero
            //Because of that, we need to increment it to keep the duration from being
            //reduced until we are ready to actually run the animation
            that._effectDuration++;
        }
    }

    const _orig_Sprite_Enemy_updateCollapse = Sprite_Enemy.prototype.updateCollapse;
    Sprite_Enemy.prototype.updateCollapse = function() {
        _checkDelayAndUpdateCollapse(this, _orig_Sprite_Enemy_updateCollapse);
    }

    const _orig_Sprite_Enemy_updateBossCollapse = Sprite_Enemy.prototype.updateBossCollapse;
    Sprite_Enemy.prototype.updateBossCollapse = function() {
        _checkDelayAndUpdateCollapse(this, _orig_Sprite_Enemy_updateBossCollapse);
    }

    const _orig_Sprite_Enemy_updateInstantCollapse = Sprite_Enemy.prototype.updateInstantCollapse;
    Sprite_Enemy.prototype.updateInstantCollapse = function() {
        _checkDelayAndUpdateCollapse(this, _orig_Sprite_Enemy_updateInstantCollapse);
    }
})();