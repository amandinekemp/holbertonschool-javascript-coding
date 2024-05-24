// Import express module
const express = require('express');

// Create a new instance of express application
const app = express();

// Define a route for the GET request on the path '/'
app.get('/', (req, res) => {
  // Send the response 'Hello Holberton School!'
  res.send('Hello Holberton School!');
});

// Start the server and listen on port 1245
app.listen(1245);

// Export the express application so it can be used in other files
module.exports = app;
