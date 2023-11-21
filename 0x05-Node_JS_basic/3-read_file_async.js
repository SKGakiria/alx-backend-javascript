// Script that attempts to read the database file asynchronously
const { readFile } = require('fs');

const countStudents = (dataPath) => {
  const students = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(dataPath, (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const lines = data.toString().split('\n');
        for (let i = 0; i < lines.length; i += 1) {
          if (lines[i]) {
            length += 1;
            const field = lines[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }
        const total = length - 1;
        console.log(`Number of students: ${total}`);
        for (const [key, val] of Object.entries(fields)) {
          if (key !== 'field') {
            console.log(`Number of students in ${key}: ${val}. List: ${students[key].join(', ')}`);
          }
        }
        resolve(data);
      }
    });
  });
};

module.exports = countStudents;
