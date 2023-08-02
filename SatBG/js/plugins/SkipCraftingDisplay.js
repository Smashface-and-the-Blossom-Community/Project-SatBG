//=============================================================================
// Plugin for RPG Maker MZ
// SkipCraftingDisplay.js
//=============================================================================
/*:
 * @target MZ
 * @plugindesc Modifies the behavior of CGMZ_Crafting to skip focusing on the display pane and instead go directly to popping up the confirm dialog (if enabled).
 * @author Kanmuri Aramaki
 * @orderAfter CGMZ_Crafting
 * 
 */

(() => {
    CGMZ_Scene_Crafting.prototype.onListOk = function() {
        if (!this._progressWindow.isCrafting()) {
            if (this._displayWindow.canCraft()) {
                if (CGMZ.Crafting.ShowConfirmationWindow) {
                    this._listWindow.deactivate();
                    this._confirmationWindow.activate();
                    this._confirmationWindow.show();
                } else {
                    this._progressWindow.startCraft();
                }
            }
            else {
                SoundManager.playBuzzer();
                this._listWindow.activate();
            }
        }
    }

    CGMZ_Scene_Crafting.prototype.onCraftConfirm = function () {
        this._displayWindow.activate();
        this._confirmationWindow.deactivate();
        this._confirmationWindow.hide();
        this._progressWindow.startCraft();
    };

    CGMZ_Scene_Crafting.prototype.onCraftCancel = function () {
        this._listWindow.activate();
        this._confirmationWindow.deactivate();
        this._confirmationWindow.hide();
    };

    CGMZ_Window_RecipeList.prototype.isCurrentItemEnabled = function() {
        return this.item().canCraft();
    }
})();