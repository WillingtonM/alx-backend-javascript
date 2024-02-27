const http = require('http');
const students = require('./3-read_file_async');
const host = '127.0.0.1';
const port = 1245;

const app = http.createServer((appreq, appres) => {
  appres.statusCode = 200;
  appres.setHeader('Content-Type', 'text/plain');
  if (appreq.url === '/') {
    appres.end('Hello Holberton School!');
  } else if (appreq.url === '/students') {
    appres.write('This is the list of our students\n');
    students(process.argv[2]).then((data) => {
      appres.write(`Number of students: ${data.students.length}\n`);
      appres.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);
      appres.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`);
      appres.end();
    }).catch((err) => appres.end(err.message));
  }
});
  
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

module.exports = app;