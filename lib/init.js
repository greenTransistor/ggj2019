"use strict";

window.mainInitManager = new InitManager();

function onInit(callback) {
	mainInitManager.onInit(callback);
}

function InitManager() {
	var events = {};

	function addNewEvent(type, triggered, listener) {
		var newEvent = {
			triggered: triggered,
			listeners: []
		};
		if (listener !== undefined) {
			newEvent.listeners.push(listener);
		}
		events[type] = newEvent;
	}

	this.init = function() {
		this.trigger('init');
	};

	this.onInit = function(callback) {
		this.wait('init', callback);
	};

	function pendingEventsFilter(eventType) {
		return (events[eventType] === undefined || !events[eventType].triggered);
	}

	function registerListener(eventTypes, callback) {
		var eventType;
		var listener = {
			callback: callback,
			pendingEventsCount: eventTypes.length
		};

		for (var i in eventTypes) {
			eventType = eventTypes[i];

			if (events[eventType] === undefined) {
				addNewEvent(eventType, false, listener);
			} else {
				events[eventType].listeners.push(listener);
			}
		}
	}

	this.trigger = function(eventType) {
		if (events[eventType] === undefined) {
			addNewEvent(eventType, true);
			return;
		}

		var event = events[eventType];

		if (event.triggered) {
			return;
		}

		var listener;
		event.triggered = true;
		for (var i in event.listeners) {
			listener = event.listeners[i];
			listener.pendingEventsCount--;
			if (listener.pendingEventsCount === 0) {
				listener.callback();
			}
		}
	};

	this.wait = function(requiredEvents, callback) {
		if (!(requiredEvents instanceof Array)) {
			requiredEvents = [requiredEvents];
		}

		var pendingEvents = requiredEvents.filter(pendingEventsFilter);

		if (pendingEvents.length === 0) {
			callback();
			return;
		}

		registerListener(pendingEvents, callback);
	};
}
