// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"---CORE---","status":false,"description":"","parameters":{}},
{"name":"CGMZ_Core","status":true,"description":"Core CGMZ Plugin, should be placed above all other CGMZ Plugins.","parameters":{"Check for Updates":"true","Dev Tools on Start":"false","Show FPS Counter":"false","Fullscreen":"true","Simulate Production Env":"false"}},
{"name":"---MENU---","status":false,"description":"","parameters":{}},
{"name":"PluginCommonBase","status":true,"description":"Plugin Analysis Common Base","parameters":{}},
{"name":"Theo_DisableTouchUI","status":true,"description":"Removes the touch UI and reposition the menu accordingly","parameters":{}},
{"name":"AltSaveScreen","status":true,"description":"Alternative save/load screen layout.","parameters":{}},
{"name":"AltMenuScreen","status":true,"description":"Alternative menu screen layout.","parameters":{}},
{"name":"AltMenuScreen2MZ","status":false,"description":"[Ver1.4.0]Yet another menu screen layout","parameters":{"allowWindowDisp":"false","maxColsMenu":"4","commandRows":"2","commandCols":"5","isDisplayStatus":"true","doesDisplayNextLevel":"true","textNextLevel":"Next%1","statusStyle":"standard","display map name":"true","location string":"Location:","bgBitmapMenu":"","doesNotSetItemScene":"true","bgBitmapItem":"","doesNotSetSkillScene":"true","bgBitmapSkill":"","doesNotSetEquipScene":"true","bgBitmapEquip":"","doesNotSetStatusScene":"true","bgBitmapStatus":"","doesNotSetOptionScene":"true","bgBitmapOptions":"","doesNotSetSaveScene":"true","bgBitmapFile":"","doesNotSetEndScene":"true","bgBitmapGameEnd":"","doesNotSetShopScene":"false","bgBitmapShop":"","doesNotSetNameScene":"true","bgBitmapNameInput":"","bgUserDefined":""}},
{"name":"CGMZ_MenuCommandWindow","status":true,"description":"Manage the menu command window","parameters":{"Commands":"[\"{\\\"Command Name\\\":\\\"\\\\\\\\C[27]Inventory\\\",\\\"Command Symbol\\\":\\\"item\\\",\\\"JS Command\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Enable Switch\\\":\\\"0\\\",\\\"Show Switch\\\":\\\"0\\\",\\\"Required Item\\\":\\\"0\\\"}\",\"{\\\"Command Name\\\":\\\"\\\\\\\\C[27]Skills\\\",\\\"Command Symbol\\\":\\\"skill\\\",\\\"JS Command\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Enable Switch\\\":\\\"0\\\",\\\"Show Switch\\\":\\\"0\\\",\\\"Required Item\\\":\\\"0\\\"}\",\"{\\\"Command Name\\\":\\\"\\\\\\\\C[27]Equipment\\\",\\\"Command Symbol\\\":\\\"equip\\\",\\\"JS Command\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Enable Switch\\\":\\\"0\\\",\\\"Show Switch\\\":\\\"0\\\",\\\"Required Item\\\":\\\"0\\\"}\",\"{\\\"Command Name\\\":\\\"\\\\\\\\C[27]Status\\\",\\\"Command Symbol\\\":\\\"status\\\",\\\"JS Command\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Enable Switch\\\":\\\"0\\\",\\\"Show Switch\\\":\\\"0\\\",\\\"Required Item\\\":\\\"0\\\"}\",\"{\\\"Command Name\\\":\\\"\\\\\\\\C[27]Party Order\\\",\\\"Command Symbol\\\":\\\"formation\\\",\\\"JS Command\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Enable Switch\\\":\\\"0\\\",\\\"Show Switch\\\":\\\"0\\\",\\\"Required Item\\\":\\\"0\\\"}\",\"{\\\"Command Name\\\":\\\"\\\\\\\\C[27]Achievements\\\",\\\"Command Symbol\\\":\\\"achievements\\\",\\\"JS Command\\\":\\\"\\\\\\\"SceneManager.push(CGMZ_Scene_Achievements)\\\\\\\"\\\",\\\"Enable Switch\\\":\\\"0\\\",\\\"Show Switch\\\":\\\"0\\\",\\\"Required Item\\\":\\\"0\\\"}\",\"{\\\"Command Name\\\":\\\"\\\\\\\\C[27]Emo Tracker™\\\",\\\"Command Symbol\\\":\\\"emotracker\\\",\\\"JS Command\\\":\\\"\\\\\\\"SceneManager.push(CGMZ_Scene_Encyclopedia);\\\\\\\"\\\",\\\"Enable Switch\\\":\\\"0\\\",\\\"Show Switch\\\":\\\"0\\\",\\\"Required Item\\\":\\\"0\\\"}\",\"{\\\"Command Name\\\":\\\"\\\\\\\\C[27]Options\\\",\\\"Command Symbol\\\":\\\"options\\\",\\\"JS Command\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Enable Switch\\\":\\\"0\\\",\\\"Show Switch\\\":\\\"0\\\",\\\"Required Item\\\":\\\"0\\\"}\",\"{\\\"Command Name\\\":\\\"\\\\\\\\C[27]Save Game\\\",\\\"Command Symbol\\\":\\\"save\\\",\\\"JS Command\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Enable Switch\\\":\\\"0\\\",\\\"Show Switch\\\":\\\"0\\\",\\\"Required Item\\\":\\\"0\\\"}\",\"{\\\"Command Name\\\":\\\"\\\\\\\\C[27]Quit\\\",\\\"Command Symbol\\\":\\\"gameEnd\\\",\\\"JS Command\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Enable Switch\\\":\\\"0\\\",\\\"Show Switch\\\":\\\"0\\\",\\\"Required Item\\\":\\\"0\\\"}\"]","Alignment":"center","Keep Original Commands":"false","Enable Text Codes":"true"}},
{"name":"CGMZ_Achievements","status":true,"description":"Creates a powerful achievement system","parameters":{"CGMZ Achievements":"","Achievements":"[\"{\\\"Name\\\":\\\"Now you know where the boss is!\\\",\\\"Points\\\":\\\"10\\\",\\\"Pre Description\\\":\\\"\\\\\\\"Working out how to track things.\\\\\\\"\\\",\\\"Post Description\\\":\\\"\\\\\\\"Obtaining EmoTracker.\\\\\\\"\\\",\\\"Category\\\":\\\"1\\\",\\\"Difficulty\\\":\\\"Easy\\\",\\\"Secret\\\":\\\"false\\\",\\\"Automatic\\\":\\\"false\\\",\\\"Rewards\\\":\\\"{\\\\\\\"Currency\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Items\\\\\\\":\\\\\\\"[\\\\\\\\\\\\\\\"{\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Item\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"22\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"Amount\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\":\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"1\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"}\\\\\\\\\\\\\\\"]\\\\\\\",\\\\\\\"Weapons\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Armors\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Switches\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Variables\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Common Event\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Requirements\\\":\\\"{\\\\\\\"Currency\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Items\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Weapons\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Armors\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Switches\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Variables\\\\\\\":\\\\\\\"[]\\\\\\\",\\\\\\\"Saves\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Playtime\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Steps\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Battles\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Wins\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Escapes\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Achievements Earned\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Achievement Points\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Encyclopedia Total\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Encyclopedia Bestiary\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Encyclopedia Items\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Encyclopedia Armors\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Encyclopedia Weapons\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Encyclopedia Skills\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Encyclopedia States\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Professions\\\\\\\":\\\\\\\"[]\\\\\\\"}\\\",\\\"Popup\\\":\\\"{\\\\\\\"Display?\\\\\\\":\\\\\\\"true\\\\\\\",\\\\\\\"Sound\\\\\\\":\\\\\\\"Applause1\\\\\\\",\\\\\\\"Image\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"Color\\\\\\\":\\\\\\\"0\\\\\\\"}\\\"}\"]","Categories":"[\"{\\\"id\\\":\\\"1\\\",\\\"Name\\\":\\\"Story\\\"}\",\"{\\\"id\\\":\\\"2\\\",\\\"Name\\\":\\\"Side Quest\\\"}\",\"{\\\"id\\\":\\\"4\\\",\\\"Name\\\":\\\"Progression\\\"}\"]","Requires CGMZ Toast Plugin":"","ShowAchievementPop":"false","AchievementEarnedText":"Achievement Earned","AchievementEarnedColor":"3","AchievementEarnedAlignment":"center","AchievementEarnedSound":"Applause1","Achievement Scene Options":"","Achievement Display Info":"[\"Name\",\"Earn Date\",\"Difficulty\",\"Points\",\"Description\",\"Requirements\",\"Rewards\"]","Disable Touch UI Space":"false","ShowSecretAchievements":"false","SecretText":"[REDACTED]","ShowCriteriaAfterCompletion":"true","Show Rewards After Fail":"true","DateFormat":"0","ScrollSpeed":"1","ScrollWait":"300","Scroll Deceleration":"0.92","Auto Scroll":"true","Show Total Points":"false","Show Total Achievements":"false","Transparent Windows":"false","Scene Background":"","Category Columns":"4","Text Options":"","Reward Text":"Rewards:","Requirement Text":"Requirements:","Difficulty Text":"Difficulty:","Description Text":"Description:","Points Text":"Points:","Points Window Text":"Points:","Unearned Text":"Keep playing to earn this achievement","Earned Text":"Achievement earned on:","Failed Text":"\\c[2]Achievement Failed\\c[0]","Earned Count Text":"Earned:","Basic Info Header Text":"Info","Description Header Text":"Description","Requirement Header Text":"Requirements","Reward Header Text":"Rewards","Steps Text":"Steps","Saves Text":"Saves","Battles Text":"Battles","Wins Text":"Wins","Escapes Text":"Escapes","Achievements Progress Text":"Achievements","Points Progress Text":"Points","Prof Level Text":"Level","Played Text":"Played","Enc Total Text":"% Enc. Total","Enc Bestiary Text":"% Enc. Bestiary","Enc Items Text":"% Enc. Items","Enc Weapons Text":"% Enc. Weapons","Enc Armors Text":"% Enc. Armors","Enc Skills Text":"% Enc. Skills","Enc States Text":"% Enc. States","Total Window Alignment":"left","List Window Alignment":"left","Category Window Alignment":"center","Currency Unit Space":"false","Label Color":"16","Gauge Colors":"","CurrencyGaugeColor1":"6","CurrencyGaugeColor2":"17","GenericGaugeColor1":"28","GenericGaugeColor2":"29","ItemGaugeColor1":"22","ItemGaugeColor2":"23","SwitchVarGaugeColor1":"20","SwitchVarGaugeColor2":"21"}},
{"name":"CGMZ_ToastManager","status":true,"description":"Manages CGMZ toast (or pop up) windows for your game","parameters":{"Max Window Count":"1","Spacing":"12","Width":"360","Fixed Width":"false","Height":"2","Fixed Height":"true","Display Time":"240","Display From Bottom":"true"}},
{"name":"CGMZ_Encyclopedia","status":true,"description":"Creates an encyclopedia scene for your game","parameters":{"Functional Options":"","Autodiscover Bestiary":"true","Autodiscover Items":"true","Autodiscover Armors":"true","Autodiscover Weapons":"true","Autodiscover Skills":"true","Autodiscover States":"true","Autodiscover Actors":"true","Autodiscover Skills On Use":"true","Category Options":"","Include Bestiary":"true","Include Items":"true","Include Armors":"true","Include Weapons":"true","Include Skills":"false","Include States":"false","Include Actors":"false","Categories":"[\"{\\\"Category Name\\\":\\\"Characters\\\",\\\"Category Symbol\\\":\\\"actors\\\",\\\"Category Display Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Category Enable Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Command Text\\\":\\\"\\\\\\\\C[27]Characters\\\"}\",\"{\\\"Category Name\\\":\\\"Friends\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Category Display Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Category Enable Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Command Text\\\":\\\"\\\\\\\\C[27]Friends\\\"}\",\"{\\\"Category Name\\\":\\\"Items\\\",\\\"Category Symbol\\\":\\\"items\\\",\\\"Category Display Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Category Enable Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Command Text\\\":\\\"\\\\\\\\C[27]Items\\\"}\",\"{\\\"Category Name\\\":\\\"Armors\\\",\\\"Category Symbol\\\":\\\"armors\\\",\\\"Category Display Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Category Enable Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Command Text\\\":\\\"\\\\\\\\C[27]Gear\\\"}\",\"{\\\"Category Name\\\":\\\"Weapons\\\",\\\"Category Symbol\\\":\\\"weapons\\\",\\\"Category Display Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Category Enable Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Command Text\\\":\\\"\\\\\\\\C[27]Weapons\\\"}\",\"{\\\"Category Name\\\":\\\"Enemies\\\",\\\"Category Symbol\\\":\\\"bestiary\\\",\\\"Category Display Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Category Enable Requirements\\\":\\\"{\\\\\\\"Item\\\\\\\":\\\\\\\"0\\\\\\\",\\\\\\\"Switch\\\\\\\":\\\\\\\"0\\\\\\\"}\\\",\\\"Command Text\\\":\\\"\\\\\\\\C[27]Enemies\\\"}\"]","Custom Entry Options":"","Custom Entries":"[\"{\\\"Name\\\":\\\"Abyssal\\\",\\\"Display Name\\\":\\\"Abyssal\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Aero\\\",\\\"Display Name\\\":\\\"AeroRaiser\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Alistair\\\",\\\"Display Name\\\":\\\"Alistair0579\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Apasher\\\",\\\"Display Name\\\":\\\"Apasher\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Blastoise\\\",\\\"Display Name\\\":\\\"Blastoise_M\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Bread\\\",\\\"Display Name\\\":\\\"Clrblbread\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Chops\\\",\\\"Display Name\\\":\\\"ChopsChef\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Clifford\\\",\\\"Display Name\\\":\\\"CliffordTBRD\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Disco\\\",\\\"Display Name\\\":\\\"DiscoTech\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Emo\\\",\\\"Display Name\\\":\\\"EmoSaru\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Espon\\\",\\\"Display Name\\\":\\\"Espon\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Fogz\\\",\\\"Display Name\\\":\\\"TheFogz\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"General Mosh\\\",\\\"Display Name\\\":\\\"General Mosh\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Griff\\\",\\\"Display Name\\\":\\\"Griff And Or\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"#nofriendsonapowderday\\\\\\\"\\\",\\\"Sketch\\\":\\\"[\\\\\\\"trackerfaces/Griff\\\\\\\"]\\\"}\",\"{\\\"Name\\\":\\\"Ichigo\\\",\\\"Display Name\\\":\\\"Ichigo1692\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Infamous\\\",\\\"Display Name\\\":\\\"TheInfamousBug\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Jack C.\\\",\\\"Display Name\\\":\\\"Jack_Carsons_Railroad_Videos\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Jack M.\\\",\\\"Display Name\\\":\\\"Jack__Mango\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Kanmuri\\\",\\\"Display Name\\\":\\\"KanmuriDaYo\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Kanzeon\\\",\\\"Display Name\\\":\\\"Kanzeon\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Kelpsey\\\",\\\"Display Name\\\":\\\"Kelpsey\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Keypaladin\\\",\\\"Display Name\\\":\\\"Keypaladin\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Kise\\\",\\\"Display Name\\\":\\\"KiseSwiftmist\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Lanthir\\\",\\\"Display Name\\\":\\\"Lanthir_imladiell\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Lego\\\",\\\"Display Name\\\":\\\"Legoman1326\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Memu\\\",\\\"Display Name\\\":\\\"Memu\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Mr. Bing\\\",\\\"Display Name\\\":\\\"Mr. Bing\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Rakanai\\\",\\\"Display Name\\\":\\\"Rakanai\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Reyn\\\",\\\"Display Name\\\":\\\"ReynZephyr\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"RGreenParadox\\\",\\\"Display Name\\\":\\\"RGreenParadox\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Rice\\\",\\\"Display Name\\\":\\\"Ricehamster\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Rinh\\\",\\\"Display Name\\\":\\\"R.nh\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Sakura\\\",\\\"Display Name\\\":\\\"SakuraTsubasa\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Saritez\\\",\\\"Display Name\\\":\\\"Saritez\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Shini\\\",\\\"Display Name\\\":\\\"Shini Winterbloom\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"SirLinkalot\\\",\\\"Display Name\\\":\\\"SirLinkalot\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Skarthe\\\",\\\"Display Name\\\":\\\"Skarthe\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Smashface\\\",\\\"Display Name\\\":\\\"Smashface_Games\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Pseudo\\\",\\\"Display Name\\\":\\\"Pseudoping\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Synack\\\",\\\"Display Name\\\":\\\"Synack\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Tidus\\\",\\\"Display Name\\\":\\\"TidusZecht\\\",\\\"Category Symbol\\\":\\\"\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Waifu\\\",\\\"Display Name\\\":\\\"New_Waifu\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\",\"{\\\"Name\\\":\\\"Willard\\\",\\\"Display Name\\\":\\\"Willard J Bradley\\\",\\\"Category Symbol\\\":\\\"npc\\\",\\\"Description\\\":\\\"\\\\\\\"\\\\\\\"\\\",\\\"Sketch\\\":\\\"[]\\\"}\"]","Extra Entry Settings":"","Extra Bestiary Settings":"[]","Encyclopedia Scene Options":"","Unknown Entry":"[REDACTED]","Unknown Entry Display":"[REDACTED]","Total Window Text":"Total:","Total Window Rounding":"2","Total Window Alignment":"left","List Window Alignment":"left","List Window Enable Text Codes":"false","Number Entries":"true","Hide Undiscovered":"false","Disable Touch UI Space":"false","List Window On Right":"false","List Window Width":"33","Categories Per Line":"5","Category Lines":"1","Bestiary List Order":"[]","Items List Order":"[]","Armors List Order":"[]","Weapons List Order":"[]","Skills List Order":"[]","States List Order":"[]","Actors List Order":"[]","Category Window Padding":"12","List Window Padding":"12","Total Window Padding":"12","Display Window Padding":"12","List Windowskin":"","Display Windowskin":"","Total Windowskin":"","Category Windowskin":"","Default Enemy Battle BGM":"","Display Window Options":"","Bestiary Display Info":"[\"Name\",\"Stats\",\"Exp\",\"Gold\",\"Drops\",\"Note\",\"Sketch\"]","Item Display Info":"[\"Name\",\"Icon\",\"Price\",\"Key Item\",\"Possession\",\"Consumable\",\"Success Rate\",\"Effects\",\"Description\",\"Note\"]","Armor Display Info":"[\"Name\",\"Icon\",\"Price\",\"Equip Type\",\"Possession\",\"Armor Type\",\"Stats\",\"Traits\",\"Description\",\"Note\"]","Weapon Display Info":"[\"Name\",\"Icon\",\"Price\",\"Equip Type\",\"Possession\",\"Weapon Type\",\"Stats\",\"Traits\",\"Description\",\"Note\"]","Skill Display Info":"[\"Name\",\"Icon\",\"Type\",\"Costs\",\"Success Rate\",\"TP Gain\",\"Effects\",\"Description\",\"Note\"]","State Display Info":"[\"Name\",\"Icon\",\"Duration\",\"Battle End Removal\",\"Walking Removal\",\"Damage Removal\",\"Traits\",\"Note\"]","Actor Display Info":"[\"Name\",\"Face\",\"Class\",\"Profile\",\"Note\"]","Custom Display Info":"[\"Name\",\"Sketch\",\"Description\"]","Stat Display Info":"[\"Max HP\",\"Max MP\",\"Attack\",\"Defense\",\"M Attack\",\"M Defense\",\"Agility\",\"Luck\"]","Effect Display Info":"[\"HP Effect\",\"MP Effect\",\"TP Effect\",\"State Add\",\"State Remove\",\"Buff\",\"Debuff\",\"Removed Buff\",\"Removed Debuff\",\"Grow\",\"Learn\"]","Trait Display Info":"[\"Attack Speed\",\"Attack Times\",\"Attack Element\",\"Attack States\",\"Party Ability\",\"Seal Skill Types\",\"Add Skill Types\",\"Add Skills\",\"Seal Skills\",\"State Resist\"]","Strip Newlines In Description":"true","Center Icons":"false","Scroll Wait":"300","Scroll Speed":"1","Scroll Deceleration":"0.92","Auto Scroll":"true","Large Icon Multiplier":"3.3","Text Options":"","Label Color":"1","Yes Text":"Yes","No Text":"No","Price Text":"Price:","No Price Text":"Not for sale","Key Item Text":"Key Item:","Possession Text":"Possession:","Equip Type Text":"Equip Slot:","Armor Type Text":"Armor Type:","No Armor Type Text":"None","Weapon Type Text":"Weapon Type:","No Weapon Type Text":"None","Skill Type Text":"Skill Type:","No Skill Type Text":"Basic","Drops Text":"Drops:","Show Drop Chances":"true","Drop Chance Text":"Chance:","Sketch Text":"Sketch:","Note Text":"Note:","Nickname Text":"Nickname:","Class Text":"Class:","Initial Level Text":"Initial Level:","Max Level Text":"Max Level:","Profile Text":"Profile:","Success Rate Text":"Success Rate:","Consumable Text":"Consumable:","HP Effect Text":"HP Effect:","MP Effect Text":"MP Effect:","TP Effect Text":"TP Effect:","Add State Text":"Causes:","Remove State Text":"Cures:","Add Buff Text":"Buffs:","Add Debuff Text":"Debuffs:","Remove Buff Text":"Remove Buffs:","Remove Debuff Text":"Clear Debuffs:","Grow Text":"Trains:","Party Ability Text":"Special Effect:","Half Encounter Text":"Half Encounter Rate","No Encounter Text":"No Encounters","Cancel Surprise Text":"Cancel Surprise","Raise Preemptive Text":"Raise Preemptive","Gold Double Text":"2x Gold Drops","Drop Item Double Text":"2x Item Drops","Description Text":"Description:","Element Text":"Element:","Attack Speed Text":"Speed Effect:","Attack Times Text":"Additional Attacks:","Attack State Text":"Applies:","MP Cost Text":"MP Cost:","TP Cost Text":"TP Cost:","User TP Gain Text":"User TP Gain:","Battle Removal Text":"Removed after battle:","Walking Removal Text":"Removed after walking:","Damage Removal Text":"Removed after damage:","Duration Text":"Duration:","Infinite Text":"Infinite","Turns Text":"Turns","Seal Skill Types Text":"Locks:","Add Skill Types Text":"Unlocks:","Seal Skill Text":"Locks:","Add Skill Text":"Grants:","State Resist Text":"Resists:","Learn Skill Text":"Learns:","Discover Date Text":"Discovered:","Unknown Date Text":"Unknown","Custom Sketch Header Text":"Sketch","Custom Description Header Text":"Description","Actor Info Header Text":"Info","Actor Stat Header Text":"Stats","Actor Trait Header Text":"Effects","Actor Note Header Text":"Notes","State Info Header Text":"Info","State Trait Header Text":"Effects","State Note Header Text":"Notes","Skill Info Header Text":"Info","Skill Trait Header Text":"Effects","Skill Description Header Text":"Description","Skill Note Header Text":"Notes","Weapon Info Header Text":"Info","Weapon Stat Header Text":"Stats","Weapon Trait Header Text":"Effects","Weapon Description Header Text":"Description","Weapon Note Header Text":"Notes","Armor Info Header Text":"Info","Armor Stat Header Text":"Stats","Armor Trait Header Text":"Effects","Armor Description Header Text":"Description","Armor Note Header Text":"Notes","Item Info Header Text":"Info","Item Effect Header Text":"Effects","Item Description Header Text":"Description","Item Note Header Text":"Notes","Bestiary Stats Header Text":"Stats","Bestiary Drops Header Text":"Drops","Bestiary Sketch Header Text":"Sketch","Bestiary Note Header Text":"Notes","Date Format":"0","Integration Options":"","Show Difficulty Mods":"true"}},
{"name":"MenuSubMembersMZ","status":true,"description":"Display sub members at menu window and map as followers","parameters":{"subMemberIdVal1":"0","subMemberIdVal2":"0","subMemberIdVal3":"0","subMemberIdVal4":"0","subMemberText":"Sub Members","displayIfNone":"false","subMemberNoneText":"None","DisplayOnMap":"false","additionalFollower":"8"}},
{"name":"MOG_MenuBackground","status":true,"description":"(v1.0) O plugin permite mudar a imagem de fundo do menu.","parameters":{"Default FileName":"Background_01","Window Opacity":"0","Scroll X-Axis":"0","Scroll Y-Axis":"0","Disable Scenes":"Scene_Test1,Scene_Test2,Scene_Test3"}},
{"name":"MOG_MenuCursor","status":true,"description":"(v1.0) Adiciona um cursor animado no menu de comando.","parameters":{"-> GENERAL":"","FileName":"Cursor_A","X-Axis Offset":"15","Y-Axis Offset":"0","Show Selection":"true","Show Selection All":"true","Move Animation":"true","Move Speed %":"100","Align":"Left","Animation Speed %":"100","-----------------------":"","-> WAVE ANIMATION":"","Wave Horizontal":"true","Wave Vertical":"false","Wave Range":"15","Wave Speed %":"100","------------------------":"","-> ROTATION ANIMATION":"","Rotation Animation":"false","Rotation Speed %":"100","-------------------------":"","-> PARTICLES":"","Particles":"true","Par File Name":"Cursor_Par01","Par Number of Particles":"30","Par X-Axis Offset":"0","Par Y-Axis Offset":"0","Par SX-Axis":"-1","Par SY-Axis":"-2"}},
{"name":"MOG_MenuCursorBackground","status":true,"description":"(v1.0) Permite customizar a imagem de seleção.","parameters":{"File Name":"CursorBackground","Scroll X":"0.5","Scroll Y":"0.5","Blink Effect":"false"}},
{"name":"MOG_MenuCursorBorder","status":true,"description":"(v1.0) Adiciona bordas na seleção de comandos.","parameters":{"Border Visible":"true","Border Line Visible":"true","Border Animation":"false","X-Axis Offset":"0","Y-Axis Offset":"0","Border X-Space":"4","Border Y-Space":"4"}},
{"name":"MOG_MenuParticles","status":true,"description":"(v1.0) Adiciona partículas nas cenas menu.","parameters":{"File Name":"Sakura_01A","Number of Particles":"15","Disable Scenes":"Scene_Test1,Scene_Test2,Scene_Test3","Unique Particles":"false","X-Axis Speed":"0.5","Y-Axis Speed":"1","Rotation Speed":"1","Blend Mode":"Normal"}},
{"name":"MOG_MenuScrollbar","status":true,"description":"(v1.0) Adiciona uma barra de rolamento nas janelas.","parameters":{"Always Visible":"true","X-Axis":"0","Y-Axis":"0","Button X-Axis":"1","Button Y-Axis":"1"}},
{"name":"PerCharacterEquipSlots","status":true,"description":"Allow for customization of equip types for each equip slot\r\non a per-char basis, config in notes field, e.g. <equipslot:1,1,2,3,4,4,5>","parameters":{}},
{"name":"---HUD---","status":false,"description":"","parameters":{}},
{"name":"MOG_ActionName","status":true,"description":"(v1.0) Apresenta uma janela com nome da ação.","parameters":{"X-Axis Offset":"0","Y-Axis Offset":"10","Name X-Axis":"0","Name Y-Axis":"24","Icon X-Axis":"0","Icon Y-Axis":"-4","Font Size":"22"}},
{"name":"MOG_ATB_Gauge","status":true,"description":"(v1.0) Apresenta uma Hud apresentando a ordem das ações.","parameters":{"Hud Angle":"0","Hud X-Axis":"48","Hud Y-Axis":"100","Enemy X-Axis Offset":"-16","Actor X-Axis Offset":"16","Active X-Axis":"-3","Active Y-Axis":"30","Gauge Size":"160","Skill Visible":"true","Skill Zoom":"0.6","Skill X-Axis":"0","Skill Y-Axis":"0"}},
{"name":"MOG_BattleCursor","status":true,"description":"(v1.0) Adiciona o cursor do alvo.","parameters":{"-> GENERAL":"","Target Window":"true","Slide Effect":"true","Move Speed":"200","Float Effect":"true","Align for Actor":"Above","Align for Enemy":"Above","X-Axis Offset Actor":"0","Y-Axis Offset Actor":"0","X-Axis Offset Enemy":"0","Y-Axis Offset Enemy":"0","-----------------------":"","-> NAME":"","Name Visible":"true","Font Size":"18","Font Bold":"false","Font Italic":"false","Name X-Axis Actor":"0","Name Y-Axis Actor":"0","Name X-Axis Enemy":"0","Name Y-Axis Enemy":"0","------------------------":"","-> ANIMATED":"","Animated":"false","Frames":"3","Animation Speed":"8"}},
{"name":"MOG_BattleHud","status":true,"description":"(v1.1) Permite customizar o layout de batalha.","parameters":{"-> MAIN <<<<<<<<<<<<<<<<<<<<<<<":"","Hud X-Axis":"90","Hud Y-Axis":"460","Hud Space X":"0","Hud Space Y":"0","Hud Slide X":"0","Hud Slide Y":"64","Vertical Mode":"false","Max Battle Members":"4","":"","-> LAYOUT OVERLAY <<<<<<<<<<<<<<<<<<<<<<<":"","Layout2 Visible":"false","Layout2 X-Axis":"0","Layout2 Y-Axis":"0","-> TURN <<<<<<<<<<<<<<<<<<<<<<<":"","Turn Visible":"true","Turn X-Axis":"0","Turn Y-Axis":"0","Turn Rotation Speed":"0","Turn Zoom Animation":"false","-> FACE <<<<<<<<<<<<<<<<<<<<<<<":"","Face Visible":"true","Face X-Axis":"54","Face Y-Axis":"16","Face Shake Animation":"true","Face Zoom Animation":"true","Face Frame Animation":"true","Face Priority":"1","-> NAME <<<<<<<<<<<<<<<<<<<<<<<":"","Name Visible":"true","Name X-Axis":"70","Name Y-Axis":"-7","Name Align":"0","Name Font Size":"20","Name Bold Size":"4","Name Font Italic":"false","-> HP <<<<<<<<<<<<<<<<<<<<<<<":"","HP Meter Visible":"true","HP Meter X-Axis":"164","HP Meter Y-Axis":"21","HP Meter Angle":"0","HP Meter Flow Anime":"true","HP Number Visible":"true","HP Number Align type":"0","HP Number X-Axis":"265","HP Number Y-Axis":"3","MaxHP Number Visible":"false","MaxHP Number X-Axis":"185","MaxHP Number Y-Axis":"40","-> MP <<<<<<<<<<<<<<<<<<<<<<<":"","MP Meter Visible":"true","MP Meter X-Axis":"297","MP Meter Y-Axis":"21","MP Meter Angle":"0","MP Meter Flow Anime":"true","MP Number Visible":"true","MP Number Align type":"0","MP Number X-Axis":"397","MP Number Y-Axis":"3","MaxMP Number Visible":"false","MaxMP Number X-Axis":"196","MaxMP Number Y-Axis":"78","-> TP <<<<<<<<<<<<<<<<<<<<<<<":"","TP Meter Visible":"true","TP Meter X-Axis":"420","TP Meter Y-Axis":"21","TP Meter Angle":"0","TP Meter Flow Anime":"true","TP Number Visible":"true","TP Number Align type":"0","TP Number X-Axis":"520","TP Number Y-Axis":"3","MaxTP Number Visible":"false","MaxTP Number X-Axis":"175","MaxTP Number Y-Axis":"99","-> ATB <<<<<<<<<<<<<<<<<<<<<<<":"","ATB Meter Visible":"true","ATB Meter X-Axis":"0","ATB Meter Y-Axis":"32","ATB Meter Angle":"0","ATB Meter Flow Anime":"false","-> STATES <<<<<<<<<<<<<<<<<<<<<<<":"","States Visible":"true","States X-Axis":"532","States Y-Axis":"0","States Mode":"0","States Max":"4","States Align":"0","-> W COMMAND <<<<<<<<<<<<<<<<<<<<<<<":"","Command Auto Adjust":"1","W Command X-Axis":"10","W Command Y-Axis":"420","W Command Width":"0","W Command Height":"0","W Command Slide X":"0","W Command Slide Y":"64","Layout Command":"true","L Command X-Axis":"-20","L Command Y-Axis":"-25","-> W PARTY <<<<<<<<<<<<<<<<<<<<<<<":"","W Party X-Axis":"325","W Party Y-Axis":"170","W Party Width":"0","W Party Height":"0","W Party Slide X":"0","W Party Slide Y":"-100","Layout Party":"true","L Party X-Axis":"-325","L Party Y-Axis":"-42","-> W HELP <<<<<<<<<<<<<<<<<<<<<<<":"","W Help X-Axis":"0","W Help Y-Axis":"0","W Help Width":"0","W Help Height":"0","W Help Slide X":"0","W Help Slide Y":"-50","Layout Help":"true","L Help X-Axis":"0","L Help Y-Axis":"0","-> W SKILL <<<<<<<<<<<<<<<<<<<<<<<":"","W Skill X-Axis":"0","W Skill Y-Axis":"0","W Skill Width":"0","W Skill Height":"0","W Skill maxCols":"2","W Skill Slide X":"0","W Skill Slide Y":"50","Layout Skill":"true","L Skill X-Axis":"0","L Skill Y-Axis":"-67","-> W ITEM <<<<<<<<<<<<<<<<<<<<<<<":"","W Item X-Axis":"0","W Item Y-Axis":"0","W Item Width":"0","W Item Height":"0","W Item maxCols":"2","W Item Slide X":"0","W Item Slide Y":"50","Layout Item":"true","L Item X-Axis":"0","L Item Y-Axis":"-67","-> W ACTOR <<<<<<<<<<<<<<<<<<<<<<<":"","W Actor X-Axis":"0","W Actor Y-Axis":"0","W Actor Width":"200","W Actor Height":"0","W Actor maxCols":"1","W Actor Slide X":"0","W Actor Slide Y":"50","Layout Actor":"true","L Actor X-Axis":"0","L Actor Y-Axis":"-67","-> W ENEMY <<<<<<<<<<<<<<<<<<<<<<<":"","W Enemy X-Axis":"0","W Enemy Y-Axis":"0","W Enemy Width":"200","W Enemy Height":"0","W Enemy maxCols":"2","W Enemy Slide X":"0","W Enemy Slide Y":"50","Layout Enemy":"true","L Enemy X-Axis":"0","L Enemy Y-Axis":"-67","-> SCREEN LAYOUT <<<<<<<<<<<<<<<<<<<<<<<":"","Screen Layout":"true","Screen X-Axis":"0","Screen Y-Axis":"0","-> CUSTOM POSITION <<<<<<<<<<<<<<<<<<<<<<<":"","Custom Position 1":"220,450","Custom Position 2":"220,495","Custom Position 3":"220,540","Custom Position 4":"220,585","Custom Position 5":"220,630","Custom Position 6":"220,675","Custom Position 7":"","Custom Position 8":""}},
{"name":"MOG_BossHP","status":true,"description":"(v1.0) Apresenta um medidor de HP para os chefes.","parameters":{"Shake Effect":"true","HP Number Visible":"true","Show Face":"true","Slant Animation":"true","Flow Speed":"2","Name Font Size":"18","Layout X-Axis":"150","Layout Y-Axis":"10","Name X-Axis":"36","Name Y-Axis":"23","Face X-Axis":"-50","Face Y-Axis":"10","Meter X-Axis":"22","Meter Y-Axis":"28","Number X-Axis":"460","Number Y-Axis":"32","Number Percentage":"false","Show States":"true","States Max":"8","States X-axis":"50","States Y-axis":"-8"}},
{"name":"MOG_HPGauge","status":true,"description":"(v1.0) Apresenta um medidor de HP do alvo.","parameters":{"Gauge For Actors":"false","Gauge For Enemies":"true","Show HP On Selection":"true","Fade Duration":"90","Slide Animation":"true","Show HP Number Actor":"false","Show HP Number Enemy":"true","Required to Kill":"false","Actor Layout X-Axis":"5","Actor Layout Y-Axis":"-90","Actor Meter X-Axis":"0","Actor Meter Y-Axis":"3","Actor HP Number X-Axis":"-25","Actor HP Number Y-Axis":"-22","Enemy Layout X-Axis":"0","Enemy Layout Y-Axis":"-16","Enemy Meter X-Axis":"8","Enemy Meter Y-Axis":"10","Enemy HP Number X-Axis":"-25","Enemy HP Number Y-Axis":"-19"}},
{"name":"---BATTLE---","status":false,"description":"","parameters":{}},
{"name":"MOG_BattlerMotion","status":true,"description":"(v1.0) Adiciona efeitos animados nos battlers.","parameters":{"Default Damage Motion":"0","Damage Motion Actor":"false","Damage Motion Enemy":"false","Disable Blink Damage":"false","Actor Action Motion":"false","Enemy Action Motion":"true","Shadow (Float Motion)":"true","Shadow Opacity":"170","Shadow Zoom Effect":"true","Battleback Ground Height":"200"}},
{"name":"MOG_CollapseEffects","status":true,"description":"(v1.0) Adiciona efeitos de colapsos animados.","parameters":{"Default Collapse":"0","Shatter Direction":"Left"}},
{"name":"MOG_EmergeMotion","status":true,"description":"(v1.0) Adiciona a animação dos inimigos emergindo.","parameters":{"Initial Wait":"15","Wait for the Next":"5"}},
{"name":"MOG_SkipWindowLog","status":true,"description":"(v1.0) Desativa a janela de Log.","parameters":{"Lag Time":"10","Display Start Message":"false","Display Preemptive Message":"true"}},
{"name":"CustomCastingAnimation","status":true,"description":"On skill activation play custom animation on top of caster\r\ndefined by notes tag. e.g. <casting_anim: 125>","parameters":{}},
{"name":"---GAMEPLAY---","status":false,"description":"","parameters":{}},
{"name":"wasdKeyMZ","status":true,"description":"It is a plugin that corresponds to the wasd move.","parameters":{}},
{"name":"RegionBase","status":true,"description":"Region Base Plugin","parameters":{"regionList":"[]","terrainTagList":"[]"}},
{"name":"MOG_EventSensor","status":true,"description":"(v1.0) Sistema de distância de eventos.","parameters":{"Self Switch Key":"D"}},
{"name":"MOG_EventText","status":true,"description":"(v1.0) Adiciona um texto em cima do evento.","parameters":{"X axis":"0","Y axis":"0","Font Size":"18"}},
{"name":"RemoveDamageFloorFlashing","status":true,"description":"Remove screen flashing from damage floors, play a sound instead, and (by default) reduce damage to 1 instead of 10 per step","parameters":{"basicFloorDamage":"1"}},
{"name":"---VISUAL---","status":false,"description":"","parameters":{}},
{"name":"MOG_CharShatterEffect","status":true,"description":"(v1.0) Cria o efeito de shatter nos sprites dos characters.","parameters":{}},
{"name":"MOG_MapNameHud","status":true,"description":"(v1.1) Apresenta uma Hud com o nome do mapa.","parameters":{"Hud X-Axis":"250","Hud Y-Axis":"60","Name X-Axis":"80","Name Y-Axis":"15","Duration":"160","Font Size":"20","Font Italic":"false","Slide Animation":"true","Zoom Animation":"false","Zoom Text Animation":"true","Particle Animation":"true","Particles Number":"15","Circle Animation":"true","Circle X-Axis":"-120","Circle Y-Axis":"0","Circle Z-Index":"0","Circle Rotation Speed":"0.01"}},
{"name":"MOG_Weather_EX","status":true,"description":"(v1.4) Adiciona novos efeitos de climas.","parameters":{"Battle Weather":"true"}},
{"name":"---TITLE---","status":false,"description":"","parameters":{}},
{"name":"CGMZ_ExitToDesktop","status":true,"description":"Adds options to close the game window (exit to desktop)","parameters":{"Command Name":"Exit Game","Hide in Browser":"true"}}
];
