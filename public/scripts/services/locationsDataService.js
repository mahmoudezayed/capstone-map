(function() {
	'use strict';

	angular.module('capstone')
	.service('locationsDataService', function ($http) {
		// Get locations
		this.getLocations = function(callback) {
		    $http.get('/api/locations').then(callback);
		};

		// Store location
		this.storeLocation = function(location, successCallback, errorCallback) {
		    $http.post('/api/locations', location)
		    .then(successCallback, errorCallback);
		};

		// Get location
		this.getLocation = function(locationId, callback) {
		    $http.get('/api/locations/'+locationId).then(callback);
		};

		// Update location
		this.updateLocation = function(locationId, location, successCallback, errorCallback) {
		    $http.put('/api/locations/'+locationId, location)
		    .then(successCallback, errorCallback);
		};
	});
})();