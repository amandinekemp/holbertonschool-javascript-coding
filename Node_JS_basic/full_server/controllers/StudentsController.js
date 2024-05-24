import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((fields) => {
        let response = 'This is the list of our students\n';
        Object.keys(fields).forEach((field, i, arr) => {
          response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}${i !== arr.length - 1 ? '\n' : ''}`;
        });
        res.status(200).send(response);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    if (!['SWE', 'CS'].includes(req.params.major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(process.argv[2])
      .then((fields) => {
        if (!fields[req.params.major]) {
          res.status(500).send('Cannot load the database');
          return;
        }
        res.status(200).send(`List: ${fields[req.params.major].join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}
