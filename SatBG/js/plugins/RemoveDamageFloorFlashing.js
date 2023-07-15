//=============================================================================
// Plugin for RPG Maker MZ
// RemoveDamageFloorFlashing.js
//=============================================================================
/*:
 * @target mz
 * @plugindesc Remove screen flashing from damage floors
 * @author Kanmuri Aramaki
 */

(() => {
    //Monkey patch Game_Actor to remove map damage flashing and add a sound instead
    Game_Actor.prototype.performMapDamage = () => {
        if (!$gameParty.inBattle()) {
            SoundManager.playActorDamage();
        }
    };
})();
