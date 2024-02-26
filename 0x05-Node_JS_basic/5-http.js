#!/usr/bin/env node

// 

const http = require('http');
const { readFile } = require('fs/promises');

const hostname = '127.0.0.1';
const port = 1245;

async function learnerDataRead(file) {
  const info = await readFile(file, 'utf-8');
  return info.trim().split('\n').slice(1);
}

function parseCsvLine(csvLine) {
  return csvLine.split(',').map((item) => item.trim());
}

function countStudents(infoLines) {
  const learners = {};
  const fields = {};

  infoLines.forEach((line) => {
    const [, firstName, , , field] = parseCsvLine(line); // Skip second element
    learners[field] = learners[field] || [];
    learners[field].push(firstName);
    fields[field] = (fields[field] || 0) + 1;
  });

  return { learners, fields };
}

function respGenerate(data) {
  let resp = `Number of students: ${data.totalStudents}\n`;
  for (const [field, info] of Object.entries(data.fields)) {
    resp += `Number of students in ${field}: ${info.numberOfStudents}. List: ${info.studentList}\n`;
  }
  return resp;
}

const app = http.createServer(async (reqst, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (reqst.url === '/') {
    res.end('Hello Holberton School!');
    return;
  }

  if (reqst.url === '/students') {
    try {
      const infoLines = await learnerDataRead(process.argv[2].toString());
      const { learners, fields } = countStudents(infoLines);

      const data = {
        totalStudents: infoLines.length,
        fields: {},
      };

      for (const [k, val] of Object.entries(fields)) {
        if (k !== 'field') {
          data.fields[k] = {
            numberOfStudents: val,
            studentList: learners[k].join(', '),
          };
        }
      }

      const resp = respGenerate(data);
      res.end(resp);
    } catch (error) {
      res.statusCode = 404;
      res.end('Cannot load the database');
    }
  }
});

app.listen(port, hostname, () => {});

module.exports = app;
