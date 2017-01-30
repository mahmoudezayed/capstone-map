(function() {
	'use strict';

	var express = require('express');
	var parser = require('body-parser');

	var app = express();

	require('./database');
	require('./seed');

	var routes = require('./routes');


	// setup our static route to serve files from the "public" folder
	app.use('/', express.static('public'));

	app.use(parser.json());

	// Use routes
	app.use('/api', routes);

	app.listen('3000', function () {
		console.log('The server in running on port 3000!');
	});
})();