(function() {
	'use strict';

	var mongoose = require('mongoose');


	var locationSchema = new mongoose.Schema({
		location: { 
			type: String, 
			required: [true, 'Location is required'] 
		},
		latitude: { 
			type: String, 
			required: [true, 'latitude is required'] 
		},
		longitude: { 
			type: String, 
			required: [true, 'longitude is required']  
		},
		createdAt: {
			type: Date,
			default: Date.now
		}
	});

	var model = mongoose.model('Location', locationSchema);

	module.exports = model;
})();