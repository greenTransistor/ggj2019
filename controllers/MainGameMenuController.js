"use strict";

const MainGameMenuController = {
	getBuildingButtonClickHandler: function(type) {
		return function(event) {
			BuildingController.startBuilding(type, event);
		}
	}
};
