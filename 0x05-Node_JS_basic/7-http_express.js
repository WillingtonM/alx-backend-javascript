#!/usr/bin/env node

/* eslint-disable no-unused-vars */

const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

function learnersCount(nameOfFile) {
  const learners = {};
  const fields = {};
  let len = 0;
  return new Promise((resolve, reject) => {
    fs.readFile(nameOfFile, (err, data) => {
      if (err) {
        reject(err);
      } else {
        let dataOutput = '';
        const dataLines = data.toString().split('\n');
        for (let dl = 0; dl < dataLines.length; dl += 1) {
          if (dataLines[dl]) {
            len += 1;
            const field = dataLines[dl].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(learners, field[3])) {
              learners[field[3]].push(field[0]);
            } else {
              learners[field[3]] = [field[0]];
            }
            if (Object.prototype.hasOwnProperty.call(fields, field[3])) {
              fields[field[3]] += 1;
            } else {
              fields[field[3]] = 1;
            }
          }
        }

        const ls = len - 1;
        dataOutput += `Number of students: ${ls}\n`;
        for (const [k, val] of Object.entries(fields)) {
          if (k !== 'field') {
            dataOutput += `Number of students in ${k}: ${val}. `;
            dataOutput += `List: ${learners[k].join(', ')}\n`;
          }
        }
        resolve(dataOutput);
      }
    });
  });
}

app.get('/', (req, appresp) => {
  appresp.statusCode = 200;
  appresp.setHeader('Content-Type', 'text/plain');
  appresp.send('Hello Holberton School!');
});

app.get('/students', (request, appResp) => {
  learnersCount(process.argv[2].toString()).then((output) => {
    appResp.send(['This is the list of our students', output].join('\n'));
  }).catch(() => {
    appResp.send('This is the list of our students\nCannot load the database');
  });
});

app.listen(port, () => {
});

module.exports = app;