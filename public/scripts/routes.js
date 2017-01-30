(function() {
	'use strict';

	angular.module('capstone')
	.config(function($routeProvider) {
	    $routeProvider
	    .when("/", {
	    	controller: 'locationsController',
	        templateUrl : "templates/home.html"

	    })
	    .when("/locations/:locationId", {
	    	controller: 'locationsController',
	        templateUrl : "templates/location.html"

	    })
	    .when("/locations/:locationId/weather", {
	    	controller: 'locationsController',
	        templateUrl : "templates/weather.html"

	    })
	    .when("/create", {
	    	controller: 'locationsController',
	        templateUrl : "templates/create_location.html"
	    })
	    .when("/iss", {
	    	controller: 'spaceController',
	        templateUrl : "templates/iss.html"
	    })

	    .otherwise({
	        redirectTo : "/"
	    });
	});
})();