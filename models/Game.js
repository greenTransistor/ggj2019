"use strict";

const WORLD_HEIGHT = 600;
const WORLD_WIDTH = 600;

const Game = {
	initBuildings: function() {
		//Add earth
		this.buildings = [new Building(BULDING_TYPE_EARTH, WORLD_WIDTH / 2, WORLD_HEIGHT / 2)];
	},

	initResources: function() {
		this.resources = shallowClone(Data.resources.starting);
	},

	start: function() {
		this.initBuildings();
		this.initResources();
	},

	startBuilding: function(buildingType) {
		return (new Building(buildingType));
	}
};
