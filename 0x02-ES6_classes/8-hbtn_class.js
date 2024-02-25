#!/usr/bin/env node

/* eslint-disable */

/**
 * HolbertonClass class
 * 
*/

export default class HolbertonClass {
  constructor(size, location) {
    if (!validateType(size, 'number')) {
      throw new TypeError('size must be a string');
    }
    if (!validateType(location, 'string')) {
      throw new TypeError('location must be a string');
    }

    this._size = size;
    this._location = location;
  } 

  /* getter size */
  get size() {
    return this._size;
  }

  /* getter location */
  get location() {
    return this._location;
  }

  /* Setter size */
  set size(sizeVal) {
    if (!validateType(sizeVal, 'number')) {
      throw new TypeError('size should  be a number');
    }
    this._size = sizeVal;
  }

  /* Setter location */
  set location(newLoc) {
    if (!validateType(newLoc, 'string')) {
      throw new TypeError('location should be a string');
    }
    this._location = newLoc;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
