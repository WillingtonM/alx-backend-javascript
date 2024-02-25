#!/usr/bin/env node

/* eslint-disable */

/**
 * Airport class
 * 
*/

export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string' || typeof code !== 'string') {
      throw new TypeError('name and code must be strings');
    }
    this._name = name;
    this._code = code;
  }
  
  /* Getter name */
  get name() {
    return this._name;
  }
  
  /* Setter name */
  set name(nameValue) {
    this._name = nameValue;
  }
  
  /* Getter code */
  get code() {
    return this._code;
  }
  
  /* Setter code */
  set code(codeValue) {
    this._code = codeValue;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
