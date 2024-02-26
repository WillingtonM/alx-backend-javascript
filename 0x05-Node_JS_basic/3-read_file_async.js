#!/usr/bin/env node

/* eslint-disable no-unused-vars */

const { promisify } = require('util');
const { readFile } = require('fs');

const readFileAsync = promisify(readFile);

function CSVLine(csvline) {
  return csvline.split(',').map((item) => item.trim());
}

function countStudents(fileName) {
  const learners = {};
  const objFields = {};

  return readFileAsync(fileName, 'utf-8')
    .then((data) => {
      const fileLines = data.trim().split('\n');
      fileLines.shift();
      fileLines.forEach((fileLine) => {
        const [firstName, , , field] = CSVLine(fileLine);

        learners[field] = learners[field] || [];
        learners[field].push(firstName);

        objFields[field] = (objFields[field] || 0) + 1;
      });

      const totalLearners = fileLines.length;
      console.log(`Number of students: ${totalLearners}`);

      for (const [k, val] of Object.entries(objFields)) {
        if (k !== 'field') {
          const learnersList = learners[k].join(', ');
          console.log(`Number of students in ${k}: ${val}. List: ${learnersList}`);
        }
      }
    })
    .catch((error) => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
