"use strict";

onInit(function() {
	MainGameMenuView.init();
});

const MainGameMenuView = {
	init: function() {
		this.container = $('main-game-menu');
		this.showResources();
		this.showBuildingButtons();
	},

	showBuildingButtons: function() {
		var currentBuilding;
		var currentBuildingButton;

		// index starts from 1 to skip Earth
		for (var i = 1; i < Data.buildings.length; i++) {
			currentBuilding = Data.buildings[i];
			currentBuildingButton = document.createElement('button');
			currentBuildingButton.appendChild(document.createTextNode(currentBuilding.name));
			currentBuildingButton.onclick = MainGameMenuController.getBuildingButtonClickHandler(i);
			this.container.appendChild(currentBuildingButton);
			this.container.appendChild(document.createElement('br'));
		}
	},

	showResources: function() {
		var currentResourceElement;
		var currentField;

		for (var resourceName of Data.resources.list) {
			currentResourceElement = document.createElement('div');
			currentField = document.createElement('val');
			currentField.id = (resourceName + '-field');
			currentResourceElement.appendChild(document.createTextNode(resourceName + ' '));
			currentResourceElement.appendChild(currentField);
			this.container.appendChild(currentResourceElement);
		}
	},

	updateResources: function() {
		for (var resourceName of Data.resources.list) {
			$(resourceName + '-field').textContent = Game.resources[resourceName];
		}
	}
};
