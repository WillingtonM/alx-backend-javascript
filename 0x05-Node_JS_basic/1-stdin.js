#!/usr/bin/env node

/* Ad-hoc script foor practicing nodejs */

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const learnername = process.stdin.read();

  if (learnername) {
    process.stdout.write(`Your name is: ${learnername}`);
  }
});

process.stdin.on('close', () => {
  process.stdout.write('This important software is now closing\n');
});
