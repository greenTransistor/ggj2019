"use strict";

const GameController = {
	startGame: function() {
		Game.start();
		MainGameMenuView.updateResources();
	}
};
