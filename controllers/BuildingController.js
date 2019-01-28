"use strict";

const BuildingController = {
	buildingMoveHandler: function(event) {
		this.moveBuilding(event);
		BuildingView.moveBuilding(this.newBuilding);
	},

	getBuildingCoordinates: function(xOnScreen, yOnScreen, buildingSize) {
		var containerCoordinates = $('buildings-container').getBoundingClientRect();

		return {
			x: (xOnScreen - containerCoordinates.left - buildingSize),
			y: (yOnScreen - containerCoordinates.top - buildingSize)
		};
	},

	moveBuilding: function(event) {
		var newBuildingCoordinates = this.getBuildingCoordinates(event.clientX, event.clientY, this.newBuilding.size);
		this.newBuilding.x = newBuildingCoordinates.x;
		this.newBuilding.y = newBuildingCoordinates.y;
	},

	startBuilding: function(type, event) {
		this.newBuilding = Game.startBuilding(type);
		if (this.newBuilding === undefined) {
			return;
		}

		this.moveBuilding(event);
		var newBuildingElement = BuildingView.showBuilding(this.newBuilding);
		newBuildingElement.onclick = getCallback(this, 'tryToBuild');
		document.body.onmousemove = getCallback(this, 'buildingMoveHandler');
	},

	tryToBuild: function() {
		//
	}
};
