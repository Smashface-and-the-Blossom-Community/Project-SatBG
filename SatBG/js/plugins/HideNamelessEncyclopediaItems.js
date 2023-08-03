//=============================================================================
// Plugin for RPG Maker MZ
// HideNamelessEncyclopediaItems.js
//=============================================================================
/*:
 * @target MZ
 * @plugindesc Modifies the behavior of CGMZ_Encyclopedia to ignore nameless database items
 * @author Kanmuri Aramaki
 * @orderAfter CGMZ_Encyclopedia
 * 
 */

(() => {
    CGMZ_Encyclopedia.prototype.shouldEntryBeHidden = function(databaseItem, symbol) {
        //The current logic doesn't use symbol to differentiate between different types
        //of database entries, but it's there in case that is needed in the future
        return !databaseItem || (databaseItem.meta && databaseItem.meta.cgmzencyclopediahide) ||
            !(databaseItem.name && databaseItem.name.trim())
    }

    CGMZ_Encyclopedia.prototype.initializeData = function (array, symbol) {
        let gameData = null;
        switch (symbol) {
            case 'bestiary':
                if (!CGMZ.Encyclopedia.IncludeBestiary) return;
                gameData = $dataEnemies;
                break;
            case 'items':
                if (!CGMZ.Encyclopedia.IncludeItems) return;
                gameData = $dataItems;
                break;
            case 'armors':
                if (!CGMZ.Encyclopedia.IncludeArmors) return;
                gameData = $dataArmors;
                break;
            case 'weapons':
                if (!CGMZ.Encyclopedia.IncludeWeapons) return;
                gameData = $dataWeapons;
                break;
            case 'skills':
                if (!CGMZ.Encyclopedia.IncludeSkills) return;
                gameData = $dataSkills;
                break;
            case 'states':
                if (!CGMZ.Encyclopedia.IncludeStates) return;
                gameData = $dataStates;
                break;
            case 'actors':
                if (!CGMZ.Encyclopedia.IncludeActors) return;
                gameData = $dataActors;
                break;
        }
        if (!gameData) return;
        let index = 1;
        for (let i = 1; i < gameData.length; i++) {
            if (this.shouldEntryBeHidden(gameData[i], symbol)) continue;
            const data = new CGMZ_EncyclopediaData(i, index);
            if (!array.find(entry => entry._id === data._id)) array.push(data);
            index++;
        }
    };
})();