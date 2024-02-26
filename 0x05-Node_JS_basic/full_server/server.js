#!/usr/bin/env node

/* eslint-disable no-unused-vars */

const express = require('express');

const router = require('./routes/index');

const app = express();
const port = 1245;

app.use('/', router);
app.use('/students', router);
app.use('/students/:major', router);

app.listen(port);

export default app;
