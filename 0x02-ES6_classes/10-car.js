#!/usr/bin/env node

/**
 * Car class
 * 
*/

export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  /* getter brand */
  get brand() {
    return this._brand;
  }

  /* setter brand */
  set brand(val) {
    this._brand = val;
  }

  /* getter motor */
  get motor() {
    return this._motor;
  }

  /* setter motor */
  set motor(val) {
    this._motor = val;
  }

  /* getter color */
  get color() {
    return this._color;
  }

  /* setter color */
  set color(val) {
    this._color = val;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
