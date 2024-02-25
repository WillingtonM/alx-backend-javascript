#!/usr/bin/env node

/* eslint-disable */

/**
 * building some skycrappers & warn people to evacuate buildings using static methods
 * 
*/

import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof sqft !== 'number' || typeof floors !== 'number') {
      throw new TypeError('Provide valid dimensions and number of floors');
    }
    super(sqft);
    this._floors = floors;
  }

  /* getter for floors */
  get floors() {
    return this._floors;
  }

  /* setter for floors */
  set floors(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Provide valid number of floors');
    }
    this._floors = value;
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

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
