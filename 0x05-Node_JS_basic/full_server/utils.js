#!/usr/bin/env node

/* eslint-disable no-unused-vars */

const { readFile } = require('fs');

module.exports = function readDatabase(filePath) {
  const learners = {};
  return new Promise((resolve, reject) => {
    readFile(filePath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        const dataLines = data.toString().split('\n');
        const noHead = dataLines.slice(1);
        for (let y = 0; y < noHead.length; y += 1) {
          if (noHead[y]) {
            const field = noHead[y].toString().split(',');
            if (Object.prototype.hasOwnProperty.call(learners, field[3])) {
              learners[field[3]].push(field[0]);
            } else {
              learners[field[3]] = [field[0]];
            }
          }
        }
        resolve(learners);
      }
    });
  });
};
