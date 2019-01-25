"use strict";

onInit(function() {
	MainGameMenuView.init();
});

const MainGameMenuView = {
	init: function() {
		this.container = $('main-game-menu');
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
		this.updateResources();
	},

	updateResources: function() {
		for (var resourceName of Data.resources.list) {
			$(resourceName + '-field').textContent = Game.resources[resourceName];
		}
	}
};
