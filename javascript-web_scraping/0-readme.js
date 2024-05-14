#!/usr/bin/node

// Importing the 'fs' module for file management
const fs = require('fs');

// Checks whether the user has supplied a file path as an argument
if (process.argv.length !== 3) {
  // If not, displays an error message and terminates execution
  console.error('Usage: node read_file.js <file_path>');
  process.exit(1);
}

// Retrieves file path from command line arguments
const filePath = process.argv[2];

// Reads file with 'utf8' encoding
fs.readFile(filePath, 'utf8', (err, data) => {
  // If an error occurs during playback, display it and terminate execution
  if (err) {
    console.error(err);
    return;
  }
  // If no error occurs, displays the contents of the file
  console.log(data);
});
