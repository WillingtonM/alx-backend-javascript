#!/usr/bin/env node

/**
 * Represents Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * Creates a new {@link HolbertonCourse}.
   *
   * @param {String} name - Name of course.
   * @param {Number} length - Length of course in months.
   * @param {String[]} students - Names of students in course.
   */
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (!Number.isInteger(length)) {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    }
    this._name = name,
    this._length = length;
    this._students = students;
  }

  /* Gets name of course. */
  get name() {
    return this._name;
  }

  /* Sets name of the course. */
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  /* Gets length of course in months. */
  get length() {
    return this._length;
  }

  /* Sets length of course in months. */
  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  /* Gets names of students in this course. */
  get students() {
    return this._students;
  }

  /* Sets names of students in the course. */
  set students(studArray) {
    if (!(studArray instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!studArray.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = studArray;
  }
}
