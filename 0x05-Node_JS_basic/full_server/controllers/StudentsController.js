#!/usr/bin/env node

/* eslint-disable no-unused-vars */

const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2].toString()).then((learners) => {
      const dataOutput = [];
      dataOutput.push('This is the list of our students');
      const keys = Object.keys(learners);
      keys.sort();
      for (let y = 0; y < keys.length; y += 1) {
        dataOutput.push(`Number of students in ${keys[y]}: ${learners[keys[y]].length}. List: ${learners[keys[y]].join(', ')}`);
      }
      response.status(200).send(dataOutput.join('\n'));
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const leanerField = request.params.major;
    readDatabase(process.argv[2].toString()).then((learners) => {
      if (!(leanerField in learners)) {
        response.status(500).send('Major parameter must be CS or SWE');
      } else {
        response.status(200).send(`List: ${learners[leanerField].join(', ')}`);
      }
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;
