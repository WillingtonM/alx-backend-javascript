#!/usr/bin/env node

/* eslint-disable */

/**
 * Its not about money money money
 * Implementing pricing class
*/

import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('No counterfeit here! You could be arrrested!');
    }
    this._amount = amount;
    this._currency = currency;
  }

  /* getter for amount */
  get amount() {
    return this._amount;
  }

  /* setter for amount objects */
  set amount(amountVal) {
    if (typeof amountVal !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = amountVal;
  }

  /* getter for currency */
  get currency() {
    return this._currency;
  }

  /* setter for currency objects */
  set currency(currencyVal) {
    if (!(currencyVal instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = currencyVal;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and Conversion rates should be numbers');
    }
    return (amount * conversionRate);
  }
}
