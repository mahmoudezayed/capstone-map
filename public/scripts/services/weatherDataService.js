(function() {
	'use strict';

	angular.module('capstone')

  	.service('weatherDataService', function($http) {
    // Get weather
    this.getWeather = function(latlng, callback) {
		$http.jsonp('https://api.darksky.net/forecast/70fc027e745f2f99d471a302cf747ca2/'+latlng+'?callback=JSON_CALLBACK')
		   .then(callback);
		};
	});
})();
