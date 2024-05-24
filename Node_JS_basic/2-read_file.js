const fs = require('fs');

function countStudents(path) {
  try {
    // Read file and split into lines
    const data = fs.readFileSync(path, 'utf8').trim().split('\n');
    const students = {};

    // Loop through each line
    for (const line of data) {
      const [field, firstname] = line.split(',');
      // Add field and student if it doesn't exist
      if (!students[field]) {
        students[field] = { count: 0, list: [] };
      }
      students[field].count += 1;
      students[field].list.push(firstname);
    }

    // Display the total number of students
    console.log(`Number of students: ${Object.values(students).reduce((a, b) => a + b.count, 0)}`);
    // Loop through each field
    for (const field in students) {
      // Display the number of students in the field and the list of first names
      console.log(`Number of students in ${field}: ${students[field].count}. List: ${students[field].list.join(', ')}`);
    }
  } catch (error) {
    // File read error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
