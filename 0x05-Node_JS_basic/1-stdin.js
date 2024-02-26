#!/usr/bin/env node

/* Ad-hoc script foor practicing nodejs */

const WELCOME_MSG = 'Welcome to Holberton School, what is your name?\n';

function school_msg(message, callback) {
  process.stdout.write(message);
  process.stdin.on('data', (data) => {
    callback(data);
  });
}

function noCloseCallBack(data) {
  process.stdout.write(`Your name is: ${data.toString()}`);
  process.exit();
}

function closeCallBack(data) {
  process.stdout.write(`Your name is: ${data.toString()}`);
  process.stdout.write('This important software is now closing\n');
  process.exit();
}

if (process.stdin.isTTY) {
  school_msg(WELCOME_MSG, noCloseCallBack);
} else {
  school_msg(WELCOME_MSG, closeCallBack);
}
