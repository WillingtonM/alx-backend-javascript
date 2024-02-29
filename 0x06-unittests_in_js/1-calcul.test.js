const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('equal positive numbers (alternate)', () => {
      let res = calculateNumber('SUM', 2.3, 1.8);
      assert.strictEqual(res, 4);
    });
    
    it('equal positive numbers', () => {
      let res = calculateNumber('SUM', 2.0, 2.0);
      assert.strictEqual(res, 4);
    });

    it('equal negative numbers (alternate)', () => {
      let res = calculateNumber('SUM', -2.3, -1.8);
      assert.strictEqual(res, -4);
    });

    it('equal negative numbers', () => {
      let res = calculateNumber('SUM', -2.0, -2.0);
      assert.strictEqual(res, -4);
    });

    it('positive and negative numbers', () => {
      let res = calculateNumber('SUM', 2.0, -2.0);
      assert.strictEqual(res, 0);
    });

    it('negative and positive numbers', () => {
      let res = calculateNumber('SUM', -2.0, 2.0);
      assert.strictEqual(re, s0);
    });

    it('0 and 0', () => {
      let res = calculateNumber('SUM', 0.0, 0.0);
      assert.strictEqual(res, 0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    let res = calculateNumber('SUBTRACT', 0.0, 0.0);
    it('0 and 0', () => {
      assert.strictEqual(res, 0);
    });

    it('equal positive numbers (alternate)', () => {
      let res = calculateNumber('SUBTRACT', 2.3, 1.8);
      assert.strictEqual(res, 0);
    });
    
    it('equal positive numbers', () => {
      let res = calculateNumber('SUBTRACT', 2.0, 2.0);
      assert.strictEqual(res, 0);
    });

    it('equal negative numbers', () => {
      let res = calculateNumber('SUBTRACT', -2.0, -2.0);
      assert.strictEqual(res, 0);
    });

    it('equal negative numbers (alternate)', () => {
      let res = calculateNumber('SUBTRACT', -2.3, -1.8);
      assert.strictEqual(res, 0);
    });
    
    it('positive and negative numbers', () => {
      let res = calculateNumber('SUBTRACT', 2.0, -2.0);
      assert.strictEqual(res, 4.0);
    });
    
    it('negative and positive numbers', () => {
      let res = calculateNumber('SUBTRACT', -2.0, 2.0);
      assert.strictEqual(res, -4.0);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('numbers with different signs', () => {
      let res = calculateNumber('DIVIDE', -7.0, 2.0);
      assert.strictEqual(res, -3.5);
    });
    
    it('positive numbers', () => {
      let res = calculateNumber('DIVIDE', 8.0, 2.0);
      assert.strictEqual(res, 4.0);
    });

    it('negative numbers', () => {
      let res = calculateNumber('DIVIDE', -7.0, -2.0);
      assert.strictEqual(res, 3.5);
    });

    it('equal positive numbers', () => {
      let res = calculateNumber('DIVIDE', 2.0, 2.0);
      assert.strictEqual(res, 1);
    });
    
    it('numbers with different signs (alternate)', () => {
      let res = calculateNumber('DIVIDE', 7.0, -2.0);
      assert.strictEqual(res, -3.5);
    });

    it('equal rounded up numbers', () => {
      let res = calculateNumber('DIVIDE', 2.6, 3.0);
      assert.strictEqual(res, 1);
    });

    it('equal negative numbers', () => {
      let res = calculateNumber('DIVIDE', -2.0, -2.0);
      assert.strictEqual(res, 1);
    });

    it('equal rounded down numbers', () => {
      let res = calculateNumber('DIVIDE', 2.4, 2.0);
      assert.strictEqual(res, 1);
    });

    it('0 and negative number', () => {
      let res = calculateNumber('DIVIDE', 0.0, -5.0);
      assert.strictEqual(res, -0);
    });
    
    it('0 and positive number', () => {
      let res = calculateNumber('DIVIDE', 0.0, 5.0);
      assert.strictEqual(res, 0);
    });

    it('positive number and number rounded down to 0', () => {
      let res = calculateNumber('DIVIDE', 5.0, 0.2);
      assert.strictEqual(res, 'Error');
    });
    
    it('positive number and 0', () => {
      let res = calculateNumber('DIVIDE', 5.0, 0);
      assert.strictEqual(res, 'Error');
    });

    it('negative number and 0', () => {
      let res = calculateNumber('DIVIDE', -5.0, 0);
      assert.strictEqual(res, 'Error');
    });

    it('positive number and number rounded up to 0', () => {
      let res = calculateNumber('DIVIDE', 5.0, -0.2);
      assert.strictEqual(res, 'Error');
    });

    it('0 and 0', () => {
      let res = calculateNumber('DIVIDE', 0.0, 0.0);
      assert.strictEqual(res, 'Error');
    });
    
    it('negative number and number rounded down to zero', () => {
      let res = calculateNumber('DIVIDE', -5.0, 0.2);
      assert.strictEqual(res,'Error');
    });

    it('negative number and number rounded up to zero', () => {
      let res = calculateNumber('DIVIDE', -5.0, -0.2);
      assert.strictEqual(res,'Error');
    });

  });
});