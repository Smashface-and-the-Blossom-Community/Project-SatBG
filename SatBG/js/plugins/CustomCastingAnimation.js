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
    //Window_BattleLog
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
            this.push("showDependentAnimation", [castingAnim], subject, targets.clone(), item.animationId);
            this.displayAction(subject, item);
        }
        else {
            _original_startAction.call(this, ...arguments);
        }
    };

    Window_BattleLog.prototype.showDependentAnimation = function (dependencies, subject, targets, animationId) {
        if (animationId < 0) {
            this.showDependentAttackAnimation(dependencies, subject, targets);
        }
        else {
            this.showDependentNormalAnimation(dependencies, targets, animationId);
        }
    };

    Window_BattleLog.prototype.showDependentAttackAnimation = function(dependencies, subject, targets) {
        if (subject.isActor()) {
            this.showDependentActorAttackAnimation(dependencies, subject, targets);
        }
        else {
            this.showDependentEnemyAttackAnimation(subject, targets);
        }
    };

    Window_BattleLog.prototype.showDependentActorAttackAnimation = function(dependencies, subject, targets) {
        this.showDependentNormalAnimation(dependencies, targets, subject.attackAnimationId1(), false);
        this.showDependentNormalAnimation(dependencies, targets, subject.attackAnimationId2(), true);
    };

    Window_BattleLog.prototype.showDependentEnemyAttackAnimation = function(subject, targets) {
        //this function was created just for API surface consistency
        //enemy attack just plays sound by default so just call normal method
        this.showEnemyAttackAnimation(subject, targets);
    }

    Window_BattleLog.prototype.showDependentNormalAnimation = function(dependencies, targets, animationId, mirror) {
        const animation = $dataAnimations[animationId];
        if (animation) {
            $gameTemp.requestDependentAnimation(dependencies, targets, animationId, mirror);
        }
    };

    //Sprite_Animation
    const _original_Sprite_Animation_initialize = Sprite_Animation.prototype.initialize;
    Sprite_Animation.prototype.initialize = function() {
        _original_Sprite_Animation_initialize.call(this);
        this._dependentAnimationSprites = [];
    };

    Sprite_Animation.prototype.getAnimationId = function() {
        return this._animation?.id ?? 0;
    };

    Sprite_Animation.prototype.addDependentAnimationSprites = function(...dependencies) {
        this._dependentAnimationSprites.push(...dependencies);
    };

    const _original_Sprite_Animation_canStart = Sprite_Animation.prototype.canStart;
    Sprite_Animation.prototype.canStart = function() {
        let canStart = true;

        if (this._dependentAnimationSprites.length > 0) {
            canStart = !this._dependentAnimationSprites.some(sprite => sprite.isPlaying());
        }

        return canStart && _original_Sprite_Animation_canStart.call(this);
    };

    //Game_Temp
    Game_Temp.prototype.requestDependentAnimation = function (dependencies, targets, animationId, mirror = false) {
        if ($dataAnimations[animationId]) {
            const request = {
                dependencies: dependencies,
                targets: targets,
                animationId: animationId,
                mirror: mirror
            };
            this._animationQueue.push(request);
            for (const target of targets) {
                if (target.startAnimation) {
                    target.startAnimation();
                }
            }
        }
    };

    //Spriteset_Base
    const _original_Spriteset_Base_initialize = Spriteset_Base.prototype.initialize;
    Spriteset_Base.prototype.initialize = function() {
        _original_Spriteset_Base_initialize.call(this);
        this._animationSpriteIndex = {};
    };

    const _original_SpritesetBase_createAnimation = Spriteset_Base.prototype.createAnimation;
    Spriteset_Base.prototype.createAnimation = function(request) {
        _original_SpritesetBase_createAnimation.call(this, request);
        if (request.dependencies) {
            const animationCount = this._animationSprites.length;
            const lastItem = this._animationSprites[animationCount - 1];

            for (const dep of request.dependencies) {
                let depSprites = this._animationSpriteIndex[dep] ?? [];
                lastItem.addDependentAnimationSprites(...depSprites);
            }
        }
    };

    const _original_Spriteset_Base_createAnimationSprite = Spriteset_Base.prototype.createAnimationSprite;
    Spriteset_Base.prototype.createAnimationSprite = function(targets, animation, mirror, delay) {
        _original_Spriteset_Base_createAnimationSprite.call(this, ...arguments);
        const animationCount = this._animationSprites.length;
        const lastItem = this._animationSprites[animationCount - 1];
        const animationId = animation?.id ?? 0;

        if (!this._animationSpriteIndex[animationId]) {
            this._animationSpriteIndex[animationId] = [];
        }

        this._animationSpriteIndex[animationId].push(lastItem);
    };

    const _original_Spriteset_Base_removeAnimation = Spriteset_Base.prototype.removeAnimation;
    Spriteset_Base.prototype.removeAnimation = function(sprite) {
        const animationId = sprite.getAnimationId();
        const spriteArray = this._animationSpriteIndex[animationId];
        spriteArray.remove(sprite);
        _original_Spriteset_Base_removeAnimation.call(this, sprite);
    }
})();