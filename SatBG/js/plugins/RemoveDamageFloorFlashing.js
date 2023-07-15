//=============================================================================
// Plugin for RPG Maker MZ
// RemoveDamageFloorFlashing.js
//=============================================================================
/*:
 * @target mz
 * @plugindesc Remove screen flashing from damage floors, play a sound instead, and reduce damage to 1 instead of 10 per step
 * @author Kanmuri Aramaki
 */

(() => {
    //Monkey patch Game_Actor to remove map damage flashing and add a sound instead
    Game_Actor.prototype.performMapDamage = () => {
        if (!$gameParty.inBattle()) {
            SoundManager.playActorDamage();
        }
    };

    //Override hard-coded floor damage of 10 per step to be just 1 instead
    Game_Actor.prototype.basicFloorDamage = () => {
        return 1;
    };
})();
