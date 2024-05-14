#!/usr/bin/node

// Imports the fs module for file management
const fs = require('fs');

// Retrieves the file path from command line arguments
const filePath = process.argv[2];
// Retrieves the data to write to the file from command line arguments
const data = process.argv[3];

// Writes the data to the file with 'utf8' encoding
fs.writeFile(filePath, data, 'utf8', (err) => {
  if (err) {
    console.error(err);
  }
});
