"use strict";

const MainMenuController = {
	buttonClickHandler(buttonName) {
		var menuName = (buttonName === 'play' ? 'main-game' : buttonName);
		MenuView.switchMenu(menuName);
	}
};
