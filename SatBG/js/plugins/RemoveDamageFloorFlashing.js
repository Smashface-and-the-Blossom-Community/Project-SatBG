//=============================================================================
// Plugin for RPG Maker MZ
// RemoveDamageFloorFlashing.js
//=============================================================================
/*:
 * @target MZ
 * @plugindesc Remove screen flashing from damage floors, play a sound instead, and (by default) reduce damage to 1 instead of 10 per step
 * @author Kanmuri Aramaki
 * 
 * @param basicFloorDamage
 * @text Basic Floor Damage
 * @desc The base amount of damage per step from walking on a damage floor
 * @type number
 * @default 1
 */

(() => {
    const pluginName = 'RemoveDamageFloorFlashing';
    const parameters = PluginManager.parameters(pluginName);
    const basicFloorDamage = parameters['basicFloorDamage'] ?? 1;

    //Monkey patch Game_Actor to remove map damage flashing and add a sound instead
    Game_Actor.prototype.performMapDamage = () => {
        if (!$gameParty.inBattle()) {
            SoundManager.playActorDamage();
        }
    };

    //Override hard-coded floor damage of 10 per step to be just 1 instead
    Game_Actor.prototype.basicFloorDamage = () => {
        return basicFloorDamage;
    };
})();
