"use strict";

function getCallback(object, functionName) {
	return function() {
		return object[functionName].apply(object, arguments);
	}
}
