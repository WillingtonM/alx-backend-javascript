#!/usr/bin/env node

/* Ad-hoc script foor practicing nodejs */

const fs = require('fs');

function countStudents(path) {
  try {
    const lines = fs.readFileSync(path, { encoding: 'utf8' }).split(/\r?\n/);
    let c = 0;
    let learnerCount = 0;
    const fields = {};

    for (const l of lines) {
      if (l.trim() !== '' && c > 0) {
        learnerCount += 1;
        const [fname, lname, age, field] = l.split(',');
        if (!fields[field]) {
          fields[field] = {
            count: 1,
            students: [fname],
          };
        } else {
          const nCount = fields[field].count + 1;
          const nLearner = (fields[field].students).concat(fname);
          fields[field] = {
            count: nCount,
            students: nLearner,
          };
        }
      }
      c += 1;
    }

    console.log(`Number of students: ${learnerCount}`);
    for (const field of Object.keys(fields)) {
      const n = fields[field].count;
      const names = fields[field].students.join(', ');
      console.log(`Number of students in ${field}: ${n}. List: ${names}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
