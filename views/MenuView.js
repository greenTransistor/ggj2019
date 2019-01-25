"use strict";

onInit(function() {
	MenuView.init();
});

const MenuView = {
	visibleMenu: 'main',

	hideAllMenus: function() {
		for (var menu of $('menus-container').children) {
			menu.hidden = true;
		}
	},

	init: function() {
		this.hideAllMenus();
		this.showMenu('main');
	},

	showMenu: function(menuName) {
		this.visibleMenu = menuName;
		$(menuName + '-menu').hidden = false;
	},

	switchMenu: function(menuName) {
		$(this.visibleMenu + '-menu').hidden = true;
		this.showMenu(menuName);
	}
};
