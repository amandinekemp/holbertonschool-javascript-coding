import fs from 'fs';
import util from 'util';

const readFile = util.promisify(fs.readFile);

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8')
      .then((data) => {
        const students = data.split('\n');
        const fields = {};
        students.forEach((student) => {
          const info = student.split(',');
          if (info[3] && info[0] !== 'firstname') {
            if (!fields[info[3]]) fields[info[3]] = [];
            fields[info[3]].push(info[0]);
          }
        });
        resolve(fields);
      })
      .catch((err) => reject(Error(err)));
  });
}
