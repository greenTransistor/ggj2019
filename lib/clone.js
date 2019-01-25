"use strict";

function copyObjectKeys(source, destination) {
	for (var key in source) {
		destination[key] = source[key];
	}
}

function getCloneConstructor(object) {
	var cloneConstructor = function() {};
	cloneConstructor.prototype = object.constructor.prototype;
	return cloneConstructor;
}

function shallowClone(object) {
	var result;

	if (!(object instanceof Object)) {
		return object;
	}

	if (object instanceof Array) {
		result = [];
	} else {
		var cloneConstructor = getCloneConstructor(object);
		result = new cloneConstructor();
	}
	copyObjectKeys(object, result);

	return result;
}
