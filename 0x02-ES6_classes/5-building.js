#!/usr/bin/env node

/* eslint-disable */

/**
 * building some skycrappers & warn people to evacuate buildings using static methods
 * 
*/

export default class Building {
  constructor(sqft) {
    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    } else {
      if (typeof sqft !== 'number') {
        throw new TypeError('Provide valid dimensions');
      }
      this._sqft = sqft;
    }
  }

  /* getter for sqft */
  get sqft() {
    return this._sqft;
  }

  /* setter for sqft */
  set sqft(sqftDimen) {
    if (typeof sqftDimen !== 'number') {
      throw new TypeError('Provide valid dimensions');
    }
    this._sqft = sqftDimen;
  }
}
