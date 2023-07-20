//=============================================================================
// Plugin for RPG Maker MZ
// PerCharacterEquipSlots.js
//=============================================================================
/*:
 * @target MZ
 * @plugindesc Allow for customization of equip types for each equip slot
 * on a per-char basis, config in notes field, e.g. <equipslot:1,1,2,3,4,4,5>
 * @author Kanmuri Aramaki
 * 
 */

(() => {
    const _original_equipslots = Game_Actor.prototype.equipSlots;

    Game_Actor.prototype.equipSlots = function() {
        let actorData = this.actor();
        let rawSlotConfig = actorData.meta.equipslot;
        let slots;

        if(rawSlotConfig) {
            slots = rawSlotConfig.split(",").map((value) => parseInt(value));
        }
        else {
            slots = _original_equipslots.bind(this)();
        }

        return slots;
    }
})();