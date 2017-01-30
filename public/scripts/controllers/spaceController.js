(function() {
	'use strict';

	angular.module('capstone')
	.controller('spaceController', function ($scope, $route, spaceDataService, $interval) {
		
		$scope.routeAction = $route.current.$$route.originalPath;
		$scope.googleMapsUrl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDmk4i7zROK4YnKIcjvr3T-zanG4fJj1IQ';

		$interval(function() {
			spaceDataService.getISS(function(response) {
		      	$scope.ISSLocation = response.data;
		      	$scope.ISSLocation.dateTime = convertTimestamp(response.data.timestamp);
		    });
		}, '1000', 0);
		

	    function convertTimestamp(timestamp) {
		  	var d = new Date(timestamp * 1000),	// Convert the passed timestamp to milliseconds
				yyyy = d.getFullYear(),
				mm = ('0' + (d.getMonth() + 1)).slice(-2),	// Months are zero based. Add leading 0.
				dd = ('0' + d.getDate()).slice(-2),			// Add leading 0.
				hh = d.getHours(),
				h = hh,
				min = ('0' + d.getMinutes()).slice(-2),		// Add leading 0.
				ampm = 'AM',
				time;
					
			if (hh > 12) {
				h = hh - 12;
				ampm = 'PM';
			} else if (hh === 12) {
				h = 12;
				ampm = 'PM';
			} else if (hh === 0) {
				h = 12;
			}
			
			// ie: 2013-02-18, 8:35 AM	
			time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;
			return time;
		}

	});
})();