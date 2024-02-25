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

  /* Setter size */
  set size(sizeValue) {
    this._size = sizeValue;
  }

  /* getter location */
  get location() {
    return this._location;
  }

  /* Setter location */
  set location(locValue) {
    this._location = locValue;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}
