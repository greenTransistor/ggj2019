"use strict";

function Building(type, x, y) {
	this.canConnect = Data.buildings[type].canConnect;
	this.name = Data.buildings[type].name;
	this.size = Data.buildings[type].size;
	this.type = type;
	this.x = x;
	this.y = y;

	this.connectToNeighbors();
}

Building.prototype.connectToNeighbors = function() {
	//
};
