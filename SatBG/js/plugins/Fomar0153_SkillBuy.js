//=============================================================================
// RPG Maker MZ - Skill Buy System - Version 1.1
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Implements a skill buy system.
 * @author Fomar0153
 *
 * @param Skill Buy Command Name
 * @type string
 * @desc Enter the skill buy command name.
 * @default Learn Skill
 *
 * @param AP X Menu Position
 * @type string
 * @desc Enter where you would like AP to appear on the status menus.
 * @default x2
 *
 * @param AP Y Menu Position
 * @type string
 * @desc Enter where you would like AP to appear on the status menus.
 * @default  y + lineHeight * 2.3
 *
 * @param AP Cost Colour
 * @type integer
 * @desc Enter which colour you would like to use, see the colours on the windowskin.
 * @default  14
 *
 * @param Show Learnt Skills
 * @type boolean
 * @desc Show learnt skills once they've been learnt?
 * @default  true
 *
 * @param Show All Unlearnt Skills
 * @type boolean
 * @desc Show Skills Whose Requirements are not met?
 * @default  true
 *
 * @help Fomar0153_SkillBuy.js
 * You will need one or more AP systems for this plugin to work.
 * Notetag skills with:
 * <ap: n>
 * Where n is the cost of the skill.
 * To make a skill require others skills to be learned before it can be learned:
 * <buyreq:x,y,z>
 * Seperate the skill ids with commas.
 *
 * Notetag actors and/or classes with:
 * <skillbuy: x,y,z>
 * Seperate the skill ids with commas.
 *
 * Version 1.0 -> 1.1
 * Fixed a bug where skills for allies would open up the actor select window.
 * Optimisation improvements.
 *
 */

var Fomar = Fomar || {};
Fomar.SkillBuy = {};

Fomar.SkillBuy.parameters = PluginManager.parameters('Fomar0153_SkillBuy');

Fomar.SkillBuy.SkillBuyCommandName = Fomar.SkillBuy.parameters["Skill Buy Command Name"];
Fomar.SkillBuy.AP_X = Fomar.SkillBuy.parameters["AP X Menu Position"];
Fomar.SkillBuy.AP_Y = Fomar.SkillBuy.parameters["AP Y Menu Position"];
Fomar.SkillBuy.apCostColor = parseInt(Fomar.SkillBuy.parameters["AP Cost Colour"]);
Fomar.SkillBuy.showLearnt = (Fomar.SkillBuy.parameters["Show Learnt Skills"] == "true");
Fomar.SkillBuy.showUnReq = (Fomar.SkillBuy.parameters["Show All Unlearnt Skills"] == "true");
Fomar.SkillBuy.stypeId = -2;

(() => {

  Fomar.SkillBuy.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
  DataManager.isDatabaseLoaded = function() {
    if (Fomar.SkillBuy.DataManager_isDatabaseLoaded.call(this)) {
      this.loadSkillRequirements();
      return true;
    } else {
      return false;
    }
  };

  DataManager.loadSkillRequirements = function() {
    for (var i = 1; i < $dataSkills.length; i++) {
      $dataSkills[i].buyReq = [];
      if ($dataSkills[i].meta["buyreq"]){
        for (var j = 0; j < $dataSkills[i].meta['buyreq'].split(",").length; j++) {
          $dataSkills[i].buyReq.push(parseInt($dataSkills[i].meta['buyreq'].split(",")[j]));
        }
      }
    }
  };

  Fomar.SkillBuy.Game_Actor_initMembers = Game_Actor.prototype.initMembers;
  Game_Actor.prototype.initMembers = function() {
    Fomar.SkillBuy.Game_Actor_initMembers.call(this);
    this._ap = 0;
  };

  Game_Actor.prototype.gainAP = function(ap) {
    this._ap += ap;
  };

  Game_Actor.prototype.currentAP = function() {
    return this._ap;
  };

  Game_Actor.prototype.buyableSkills = function() {
    var skills = [];
    if (this.actor().meta['skillbuy']) {
      this.actor().meta['skillbuy'].split(",").forEach(function(skillId) {
        skills.push($dataSkills[parseInt(skillId)]);
      });
    }
    if (this.currentClass().meta['skillbuy']) {
      this.currentClass().meta['skillbuy'].split(",").forEach(function(skillId) {
        skills.push($dataSkills[parseInt(skillId)]);
      });
    }
    return skills;
  };

  Game_Actor.prototype.buyableSkillCheck = function(skill) {
    if (skill && skill.buyReq.length > 0) {
      for (var i = 0; i < skill.buyReq.length; i++) {
        if (!this.isLearnedSkill(skill.buyReq[i])) {
          return false;
        }
      }
    }
    return true;
  };

  Fomar.SkillBuy.Window_StatusBase_drawActorSimpleStatus = Window_StatusBase.prototype.drawActorSimpleStatus;
  Window_StatusBase.prototype.drawActorSimpleStatus = function(actor, x, y) {
    Fomar.SkillBuy.Window_StatusBase_drawActorSimpleStatus.call(this, actor, x, y);
    const lineHeight = this.lineHeight();
    const x2 = x + 180;
    this.drawActorAP(actor, eval(Fomar.SkillBuy.AP_X), eval(Fomar.SkillBuy.AP_Y));
  };

  Window_StatusBase.prototype.drawActorAP = function(actor, x, y) {
    this.changeTextColor(ColorManager.systemColor());
    this.drawText(Fomar.APSystem.vocabAP, x, y, 48);
    this.resetTextColor();
    this.drawText(actor._ap, x + 48, y, 72, "right");
  };

  Fomar.SkillBuy.Window_SkillType_makeCommandList = Window_SkillType.prototype.makeCommandList;
  Window_SkillType.prototype.makeCommandList = function() {
    if (this._actor) {
      Fomar.SkillBuy.Window_SkillType_makeCommandList.call(this);
      this.addCommand(Fomar.SkillBuy.SkillBuyCommandName, "skill", true, Fomar.SkillBuy.stypeId);
    }
  };

  Fomar.SkillBuy.Window_SkillList_initialize = Window_SkillList.prototype.initialize;
  Window_SkillList.prototype.initialize = function(rect) {
    this._req = [];
    Fomar.SkillBuy.Window_SkillList_initialize.call(this, rect);
  };

  Fomar.SkillBuy.Window_SkillList_makeItemList = Window_SkillList.prototype.makeItemList;
  Window_SkillList.prototype.makeItemList = function() {
    if (this._actor && this._stypeId == Fomar.SkillBuy.stypeId) {
      this._data = this._actor.buyableSkills().filter((item => (Fomar.SkillBuy.showLearnt || !this._actor.isLearnedSkill(item.id)) &&
        (Fomar.SkillBuy.showUnReq || this._actor.buyableSkillCheck(item))));
    } else {
      Fomar.SkillBuy.Window_SkillList_makeItemList.call(this);
    }
  };

  Fomar.SkillBuy.Window_SkillList_isEnabled = Window_SkillList.prototype.isEnabled;
  Window_SkillList.prototype.isEnabled = function(item) {
    if (!item) {
      return false;
    }
    if (this._stypeId == Fomar.SkillBuy.stypeId) {
      return (this._actor._ap >= parseInt(item.meta["ap"]) && (!this._actor.isLearnedSkill(item.id) &&
        this._actor.buyableSkillCheck(item)));
    } else {
      return Fomar.SkillBuy.Window_SkillList_isEnabled.call(this, item);
    }
  };

  Fomar.SkillBuy.Window_SkillList_drawSkillCost = Window_SkillList.prototype.drawSkillCost;
  Window_SkillList.prototype.drawSkillCost = function(skill, x, y, width) {
    if (skill && this._stypeId == Fomar.SkillBuy.stypeId) {
      if (this._actor.isLearnedSkill(skill.id)) {
        this.changeTextColor(ColorManager.textColor(Fomar.SkillBuy.apCostColor));
        this.drawText("---", x, y, width, "right");
      } else {
        this.changeTextColor(ColorManager.textColor(Fomar.SkillBuy.apCostColor));
        this.drawText(parseInt(skill.meta["ap"]) + "AP", x, y, width, "right");
      }
    } else {
      Fomar.SkillBuy.Window_SkillList_drawSkillCost.call(this, skill, x, y, width);
    }
  };

  Window_SkillList.prototype.update = function() {
    Window_Selectable.prototype.update.call(this);
    if (this._stypeId != Fomar.SkillBuy.stypeId) {
      this._req = [];
      this._oldIndex = -1;
      return;
    }
    if (this._oldIndex != this._index) {
      this._oldIndex = this._index;
      this._req = [];
      if (this.item() && this.item().buyReq.length > 0) {
        for (var i = 0; i < this.item().buyReq.length; i++) {
          this._req.push(this.item().buyReq[i]);
        }
      }
      this.refresh();
    }
  };

  Window_SkillList.prototype.drawRequiredItemBackground = function(index) {
    const rect = this.itemRect(index);
    const color = ColorManager.pendingColor();
    this.changePaintOpacity(false);
    this.contents.fillRect(rect.x, rect.y, rect.width, rect.height, color);
    this.changePaintOpacity(true);
  };

  Fomar.SkillBuy.Window_SkillList_drawItem = Window_SkillList.prototype.drawItem;
  Window_SkillList.prototype.drawItem = function(index) {
    const skill = this.itemAt(index);
    if (skill && this._req.includes(skill.id)) {
      this.drawRequiredItemBackground(index);
    }
    Fomar.SkillBuy.Window_SkillList_drawItem.call(this, index);
  };

  Fomar.SkillBuy.Scene_Skill_useItem = Scene_Skill.prototype.useItem;
  Scene_Skill.prototype.useItem = function() {
    if (this.item() && this._itemWindow._stypeId == Fomar.SkillBuy.stypeId) {
      this.actor().learnSkill(this.item().id);
      this.actor()._ap -= parseInt(this.item().meta["ap"]);
      this._statusWindow.refresh();
      this._itemWindow.refresh();
      if (this._itemWindow._index >= this._itemWindow.maxItems()) {
        this._itemWindow.select(this._itemWindow._index - 1);
      }
      this.actor().refresh();
    } else {
      Fomar.SkillBuy.Scene_Skill_useItem.call(this);
    }
  };

  Scene_Skill.prototype.determineItem = function() {
    if (this._itemWindow._stypeId == Fomar.SkillBuy.stypeId) {
      this.useItem();
      this.activateItemWindow();
    } else {
      Scene_ItemBase.prototype.determineItem.call(this);
    }
  };

})();
