#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

// Make a request to the URL
request(url, function (error, response, body) {
	// Handle error
	if (error) {
		console.error('error:', error);
	} else {
		// Parse JSON data from the response body
		const films = JSON.parse(body).results;
		// Initialize a counter for the number of movies with Wedge Antilles
		let count = 0;
		// Iterate over each film
		films.forEach(film => {
			// Iterate over each character in the film
			film.characters.forEach(character => {
				// Check if the character URL includes '/18/'
				if (character.includes('18')) {
					count++;
				}
			});
		});
		// Log the number of movies with Wedge Antilles
		console.log(count);
	}
});
