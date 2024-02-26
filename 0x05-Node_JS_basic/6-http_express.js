#!/usr/bin/env node

/* eslint-disable no-param-reassign */

const express = require('express');
const app = express();

const HOST = '127.0.0.1';
const PORT = 1245;

app.get('/', (expReq, expResp) => {
  expResp.statusCode = 200;
  expResp.setHeader('Content-Type', 'text/plain');
  expResp.setHeader('X-Served-By', 'itsfoss');
  expResp.send('Hello Holberton School!');
});

app.listen(PORT, HOST, () => {});

module.exports = app;
