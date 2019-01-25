"use strict";

const MainMenuController = {
	buttonClickHandler(buttonName) {
		if (buttonName === 'play') {
			MenuView.switchMenu('main-game');
			GameController.startGame();
		} else {
			MenuView.switchMenu(buttonName);
		}
	}
};
