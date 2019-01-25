"use strict";

onInit(function() {
	EnemiesView.init();
});

const EnemiesView = {
	init: function() {
		this.loadEnemies();
	},

	loadEnemies: function() {
		this.enemiesImages = Data.enemies.map(function(enemy) {
			var image = new Image();

			image.src = ('images/enemies/' + enemy.name + '.png');

			return image;
		});
	}
};
