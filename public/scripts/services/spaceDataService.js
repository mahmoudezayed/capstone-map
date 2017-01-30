(function() {
	'use strict';

	angular.module('capstone')
	.service('spaceDataService', function ($http) {
		// Get location
		this.getISS = function(callback, failure) {
	      	$http.jsonp('http://api.open-notify.org/iss-now.json?callback=JSON_CALLBACK')
	           .then(callback, failure);
	    };
	});
})();
