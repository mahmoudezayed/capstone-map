(function() {
	'use strict';

	angular.module('capstone')
	.controller('locationsController', function ($scope, $route, locationsDataService, weatherDataService, $routeParams, $location, Flash) {
		
		$scope.routeAction = $route.current.$$route.originalPath;
		$scope.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDmk4i7zROK4YnKIcjvr3T-zanG4fJj1IQ';
		// Get locations
		locationsDataService.getLocations(function (response) {
			var locations = response.data;
			$scope.locations = locations;
		});

		// Save new location
		$scope.location = {};
		$scope.saveLocation = function (location) {
			locationsDataService.storeLocation(location, function (response) {
				Flash.show('success', "Place Successfully Added!");
				$location.path('/');
			}, errorCallback);
		};

		// Get location
		if($routeParams.locationId){
			locationsDataService.getLocation($routeParams.locationId, function (response) {
				var location = response.data;
				$scope.location = location;

				// Get weather
				$scope.weather = 'Sorry, Weather information not available for this location!';
				var latlng = location.latitude+','+location.longitude;
				weatherDataService.getWeather(latlng, function (response) {
					var weather = response.data.daily.summary;
					$scope.weather = weather;
				});
			});
		}
		

		// Update location
		$scope.updateLocation = function (location) {
			locationsDataService.updateLocation(location._id, location, function() {
				Flash.show('success', "Place Successfully Updated!");
			  	$location.path('/');
			}, errorCallback);
		};


		/** Creates an array containing each individual error message. */
		function errorCallback(response) {
			$scope.errors = response.data.errors;
			$scope.allErrors = [];
			for (var error in $scope.errors) {
			  $scope.allErrors.push($scope.errors[error][0].message);
			}
		}
	});
})();