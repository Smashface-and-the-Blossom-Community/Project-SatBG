//=============================================================================
// Plugin for RPG Maker MZ
// CustomCastingAnimation.js
//=============================================================================
/*:
 * @target MZ
 * @plugindesc On skill activation play custom animation on top of caster
 * defined by notes tag. e.g. <casting_anim: 125>
 * @author Kanmuri Aramaki
 * 
 */

(() => {
    const _original_startAction = Window_BattleLog.prototype.startAction

    Window_BattleLog.prototype.startAction = function (subject, action, targets) {
        const item = action.item();
        let rawCastingAnim = item.meta.casting_anim;

        if (rawCastingAnim) {
            let castingAnim = parseInt(rawCastingAnim);

            this.push("performActionStart", subject, action);
            this.push("waitForMovement");
            this.push("showAnimation", subject, [subject], castingAnim);
            this.push("performAction", subject, action);
            this.push("showAnimation", subject, targets.clone(), item.animationId);
            this.displayAction(subject, item);
        }
        else {
            _original_startAction.call(this, ...arguments);
        }
    };
})();