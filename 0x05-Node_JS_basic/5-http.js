const http = require('http');
const fs = require('fs');

const HOST = 'localhost';
const PORT = 1245;
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts students in CSV file.
 * @param {String} dtpath The path to CSV data file.
 */
const countStudents = (dtpath) => new Promise((resolve, reject) => {
  if (!dtpath) {
    reject(new Error('Cannot load the database'));
  }
  if (dtpath) {
    fs.readFile(dtpath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const reports = [];
        const learnerGroups = {};
        const fileLines = data.toString('utf-8').trim().split('\n');
        const namesFiels = fileLines[0].split(',');
        const learnerNames = namesFiels.slice(
          0,
          namesFiels.length - 1,
        );

        for (const ln of fileLines.slice(1)) {
          const learnerRecord = ln.split(',');
          const learnerPropValues = learnerRecord.slice(
            0,
            learnerRecord.length - 1,
          );
          const field = learnerRecord[learnerRecord.length - 1];
          if (!Object.keys(learnerGroups).includes(field)) {
            learnerGroups[field] = [];
          }
          const studentEntries = learnerNames.map((learnerProp, idx) => [
            learnerProp,
            learnerPropValues[idx],
          ]);
          learnerGroups[field].push(Object.fromEntries(studentEntries));
        }

        const totalStudents = Object.values(learnerGroups).reduce(
          (prev, curr) => (prev || []).length + curr.length,
        );
        reports.push(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(learnerGroups)) {
          reports.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        resolve(reports.join('\n'));
      }
    });
  }
});

const SERVER_ROUTE_HANDLE = [
  {
    route: '/',
    handler(_, resp) {
      const responseText = 'Hello Holberton School!';

      resp.setHeader('Content-Type', 'text/plain');
      resp.setHeader('Content-Length', responseText.length);
      resp.statusCode = 200;
      resp.write(Buffer.from(responseText));
    },
  },
  {
    route: '/students',
    handler(_, resp) {
      const respParts = ['This is the list of our students'];

      countStudents(DB_FILE)
        .then((report) => {
          respParts.push(report);
          const responseText = respParts.join('\n');
          resp.setHeader('Content-Type', 'text/plain');
          resp.setHeader('Content-Length', responseText.length);
          resp.statusCode = 200;
          resp.write(Buffer.from(responseText));
        })
        .catch((err) => {
          respParts.push(err instanceof Error ? err.message : err.toString());
          const responseText = respParts.join('\n');
          resp.setHeader('Content-Type', 'text/plain');
          resp.setHeader('Content-Length', responseText.length);
          resp.statusCode = 200;
          resp.write(Buffer.from(responseText));
        });
    },
  },
];

app.on('request', (req, resp) => {
  for (const routeHandle of SERVER_ROUTE_HANDLE) {
    if (routeHandle.route === req.url) {
      routeHandle.handler(req, resp);
      break;
    }
  }
});

app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
