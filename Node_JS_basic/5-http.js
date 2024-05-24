// Import http module
const http = require('http');
// Import countStudents function
const countStudents = require('./3-read_file_async');

// Create server
const app = http.createServer(async (req, res) => {
  // Set status code and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Handle root route
  if (req.url === '/') {
    res.end('Hello Holberton School!');
    // Handle students route
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      // Get student count and list
      const data = await countStudents(process.argv[2]);
      // Send student list
      res.end(`${data.join('\n').filter(Boolean)}`);
    } catch (error) {
      // Send error message
      res.end(error.message);
    }
    // Handle 404
  } else {
    res.end('Not Found\n');
  }
});

// Start server
app.listen(1245);

// Export server
module.exports = app;
