const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {

    it(`checking if numbers round`, function() {
      let rslt = calculateNumber("SUM", 1, 2);
      assert.strictEqual(rslt, 3);
    });
    it(`checking if numbers round`, function() {
      let rslt = calculateNumber("SUBTRACT", 1.4, 2.2);
      assert.strictEqual(rslt, -1);
    });
    it(`checking if numbers round`, function() {
      let rslt = calculateNumber("SUBTRACT", 4.9, 2.7);
      assert.strictEqual(rslt, 2);
    });
    it(`checking if numbers round`, function() {
      let rslt = calculateNumber("DIVIDE", 4, 2);
      assert.strictEqual(rslt, 2);
    });
    it(`checking if numbers round`, function() {
      let rslt = calculateNumber("DIVIDE", 1.7, 0);
      assert.strictEqual(rslt, "Error");
    });
    it(`checking if numbers round`, function() {
      let rslt = calculateNumber("DIVIDE", 1.4, 4.6);
      assert.strictEqual(rslt, 0.2);
    });
});