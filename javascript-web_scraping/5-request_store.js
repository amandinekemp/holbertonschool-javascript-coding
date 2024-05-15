#!/usr/bin / node

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
	// Handle error
	if (error) {
		console.error(`Error: ${error}`);
	} else {
		// Write the response body to the file
		fs.writeFile(filePath, body, 'utf-8', (err) => {
			// Handle error
			if (err) {
				console.error(`Error: ${err}`);
			}
		});
	}
});
