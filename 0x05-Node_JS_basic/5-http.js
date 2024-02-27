const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const hostname = '127.0.0.1';

const app = http.createServer(async (appreq, appresp) => {
  appresp.statusCode = 200;
  if (appreq.url === '/') {
    appresp.end('Hello Holberton School!');
  } else if (appreq.url === '/students') {
    let dbList = 'This is the list of our students\n';
    await countStudents(process.argv[2])
      .then((lsMsg) => {
        dbList += lsMsg;
        appresp.end(dbList);
      })
      .catch((err) => {
        dbList += err.message;
        appresp.end(dbList);
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
