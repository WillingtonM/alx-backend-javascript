const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./0-calcul");

describe("calculateNumber()", function() {
  const res = null;
  
  it('Rounding down b\'s floating point fractional number', () => {
    res = calculateNumber(1.0, 2.4)
    assert.strictEqual(res, 3);
  });
  
  it('floating point whole numbers', () => {
    res = calculateNumber(1.0, 2.0)
    assert.strictEqual(res, 3);
  });
  
  it('Rounding down a\'s floating point fractional number', () => {
    res = calculateNumber(1.4, 2.0)
    assert.strictEqual(res, 3);
  });
  
  it('Rounding down a and b\'s floating point fractional number', () => {
    res = calculateNumber(1.4, 2.4)
    assert.strictEqual(res, 3);
  });
  
  it('Rounding up a and b\'s floating point fractional numbers', () => {
    res = calculateNumber(2.6, 2.5)
    assert.strictEqual(res, 6);
  });

  it('Rounding up b\'s floating point fractional numbers', () => {
    res = calculateNumber(1.0, 2.5)
    assert.strictEqual(res, 4);
  });

  it('Rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
    res = calculateNumber(2.499999, 3.499999)
    assert.strictEqual(res, 5);
  });

  it('Rounding up a\'s floating point fractional numbers', () => {
    res = calculateNumber(2.6, 2.0)
    assert.strictEqual(res, 5);
  });
});
