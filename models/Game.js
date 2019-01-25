"use strict";

const Game = {
	initResources: function() {
		this.resources = shallowClone(Data.resources.starting);
	},

	start: function() {
		this.initResources();
	}
};
