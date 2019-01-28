"use strict";

const BuildingView = {
	moveBuilding: function(building) {
		building.element.style.left = building.x + 'px';
		building.element.style.top = building.y + 'px';
	},

	showBuilding: function(building) {
		var newBuildingElement = document.createElement('img');

		building.element = newBuildingElement;
		newBuildingElement.src = 'views/images/buildings/' + building.name + '.png';
		newBuildingElement.style.position = 'absolute';
		$('buildings-container').appendChild(newBuildingElement);
		this.moveBuilding(building);

		return newBuildingElement;
	}
};
