(function() {
	'use strict';

	var Location = require('./models/location');

	var locations = [
		{location: 'Zero', latitude: 0, longitude: 0},
		{location: 'Cairo', latitude: 30.1235692, longitude: 31.3025122},
		{location: 'Paris', latitude: 48.8589507, longitude: 2.2775169},
		{location: 'Dubai', latitude: 25.074718, longitude: 54.9479082}
	];

	locations.forEach(function(location, index) {
		Location.find({'location': location.location}, function (err, locations) {
			if(!err && !locations.length){
				Location.create(location);
			}
		});
	});
})();