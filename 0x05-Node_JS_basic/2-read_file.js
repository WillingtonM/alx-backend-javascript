#!/usr/bin/env node

/* Ad-hoc script foor practicing nodejs */

const fs = require('fs');

module.exports = function countLearners(path) {
  try {
    const data = fs.readFileSync(path, { encoding: 'utf-8' });
    const datalines = data.split('\n').slice(1, -1);
    const dataheader = data.split('\n').slice(0, 1)[0].split(',');
    const idxField = dataheader.findIndex((e) => e === 'field');
    const idxFirstName = dataheader.findIndex((e) => e === 'firstname');
    const learners = {};
    const fields = {};

    datalines.forEach((line) => {
      const dlist = line.split(',');
      if (!fields[dlist[idxField]]) fields[dlist[idxField]] = 0;
      fields[dlist[idxField]] += 1;
      if (!learners[dlist[idxField]]) learners[dlist[idxField]] = '';
      learners[dlist[idxField]] += learners[dlist[idxField]] ? `, ${dlist[idxFirstName]}` : dlist[idxFirstName];
    });

    console.log(`Number of learners: ${datalines.length}`);
    for (const k in fields) {
      if (Object.hasOwnProperty.call(fields, k)) {
        const elem = fields[k];
        console.log(`Number of learners in ${k}: ${elem}. List: ${learners[k]}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
