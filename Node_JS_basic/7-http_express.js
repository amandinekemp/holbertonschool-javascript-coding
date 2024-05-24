// Import express module
const express = require('express');
// Import countStudents function from 3-read_file_async.js
const countStudents = require('./3-read_file_async');

// Get the database file name from command line arguments
const database = process.argv[2];

// Create a new instance of express application
const app = express();

// Define a route for the GET request on the path '/'
app.get('/', (req, res) => {
  // Send the response 'Hello Holberton School!'
  res.send('Hello Holberton School!');
});

// Define a route for the GET request on the path '/students'
app.get('/students', (req, res) => {
  // Call the countStudents function with the database file name
  countStudents(database)
    .then((data) => {
      // Send the response with the list of students
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((error) => {
      // Send a 500 Internal Server Error response with the error message
      res.status(500).send(error.message);
    });
});

// Start the server and listen on port 1245
app.listen(1245);

// Export the express application so it can be used in other files
module.exports = app;
