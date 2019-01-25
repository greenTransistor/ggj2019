"use strict";

function Building(type, x, y) {
	this.size = Data.buildings[type].size;
	this.type = type;
	this.x = x;
	this.y = y;

	this.connectToNeighbors();
}

Building.prototype.connectToNeighbors = function() {
	//
};
