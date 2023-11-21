// Script that allows the database to be read asynchronously
const { readFile } = require('fs');

const readDatabase = (dataPath) => {
  const students = {};
  return new Promise((resolve, reject) => {
    readFile(dataPath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const lines = data.toString().split('\n');
        const noHeader = lines.slice(1);
        for (let i = 0; i < noHeader.length; i += 1) {
          if (noHeader[i]) {
            const field = noHeader[i].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(students, field[3])) {
              students[field[3]].push(field[0]);
            } else {
              students[field[3]] = [field[0]];
            }
          }
        }
        resolve(students);
      }
    });
  });
};

module.exports = readDatabase;
