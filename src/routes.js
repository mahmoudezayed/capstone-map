(function() {
	'use strict';
	var express = require('express');
	var router = express.Router();
	var Location = require('./models/location');
	var validationErrors = require('./formatValidationErrors').validationErrors;

	// locations
	router.get('/locations', function (req, res) {
		Location.find({}, function (err, locations) {
			if(err){
				return res.status(500).json({message: err.message});
			}
			res.json(locations);
		});
	});

	// Create new location
	router.post('/locations', function (req, res, next) {
		var location = req.body;
		Location.create(location, function (err, location) {
			if (err) return validationErrors(err, req, res, next);
			res.json({'location': location, message: 'Place created successfully'});
		});
		
	});

	// location by id
	router.get('/locations/:locationId', function (req, res) {
		Location.findById(req.params.locationId, function (err, location) {
			if(err){
				return res.status(500).json({message: err.message});
			}
			res.json(location);
		});
	});

	// Update location
	router.put('/locations/:locationId', function (req, res, next) {
		Location.findOneAndUpdate({
		  	_id: req.params.locationId
		}, req.body, { runValidators: true }, function (err, results) {
			if (err) return validationErrors(err, req, res, next);
			res.status(204);
			res.end();
		});
	});

	module.exports = router;
})();