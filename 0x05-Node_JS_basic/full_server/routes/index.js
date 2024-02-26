#!/usr/bin/env node

/* eslint-disable no-unused-vars */

const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const exprRouter = express.Router();

exprRouter.get('/', AppController.getHomepage);

exprRouter.get('/students', StudentsController.getAllStudents);

exprRouter.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = exprRouter;
