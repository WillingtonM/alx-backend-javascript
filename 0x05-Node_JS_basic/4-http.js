#!/usr/bin/env node

/* eslint-disable no-param-reassign */

const { createServer } = require('http');

const HOST = '127.0.0.1';
const PORT = 1245;

const app = createServer((serverReq, serverResp) => {
  serverResp.statusCode = 200;
  serverResp.setHeader('Content-Type', 'text/plain');
  serverResp.end('Hello Holberton School!');
});

app.listen(PORT, HOST, () => {});

module.exports = app;
