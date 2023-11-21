// Script that attempts to read the database file synchronously
const fs = require('fs');

const countStudents = (dataPath) => {
  try {
    let data = fs.readFileSync(dataPath, 'utf8').toString().split('\n');
    data = data.slice(1, data.length - 1);
    console.log(`Number of students: ${data.length}`);
    const students = {};
    for (const row of data) {
      const field = row.split(',');
      if (!students[field[3]]) students[field[3]] = [];
      students[field[3]].push(field[0]);
    }

    for (const student in students) {
      if (student) console.log(`Number of students in ${student}: ${students[student].length}. List: ${students[student].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
