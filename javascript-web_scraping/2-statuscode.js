#!/usr/bin/node

// Imports the request module for HTTP requests
const request = require('request');
// Retrieves the URL from command line arguments
const url = process.argv[2];

// Makes an HTTP request to the specified URL
request(url, (error, response) => {
	if (error) {
		// If an error occurs, displays an error message
		console.error(error);
	} else {
		// Otherwise, displays the HTTP status code
		console.log('code:', response.statusCode);
	}
});
