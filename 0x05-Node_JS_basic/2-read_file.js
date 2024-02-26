#!/usr/bin/env node

/* Ad-hoc script foor practicing nodejs */

const fs = require('fs');

function groupFilter(filerGroup, filterDataset) {
  return filterDataset.filter((entry) => entry.split(',').at(-1).toString() === filerGroup);
}

function countStudents(path) {
  try {
    const csvData = fs.readFileSync(path, 'utf-8');
    const strData = csvData.toString().trim().split('\n');
    const allData = strData.splice(1, csvData.length);
    console.log(`Number of students: ${allData.length}`);
    const groups = new Set(allData.map((item) => item.split(',').at(-1)));
    for (const g of groups) {
      const groupFiltered = groupFilter(g, allData);
      const fNames = groupFiltered.map((entry) => entry.split(',').at(0));
      console.log(`Number of students in ${g}: ${groupFiltered.length}. List: ${fNames.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
