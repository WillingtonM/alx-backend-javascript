#!/usr/bin/env node

/* eslint-disable no-param-reassign */

const express = require('express');

const app = express();
const PORT = 1245;

app.get('/', (_, appres) => {
  appres.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server currently listening on PORT ${PORT}`);
});

module.exports = app;
