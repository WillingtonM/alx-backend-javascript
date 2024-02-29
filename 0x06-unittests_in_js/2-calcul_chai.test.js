const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('type == "SUM"', () => {
    it('equal positive numbers (alternate)', () => {
      let res = calculateNumber('SUM', 2.3, 1.8);
      expect(res).to.equal(4.0);
    });
    
    it('equal positive numbers', () => {
      let res = calculateNumber('SUM', 2.0, 2.0);
      expect(res).to.equal(4.0);
    });

    it('equal negative numbers (alternate)', () => {
      let res = calculateNumber('SUM', -2.3, -1.8);
      expect(res).to.equal(-4.0);
    });

    it('equal negative numbers', () => {
      let res = calculateNumber('SUM', -2.0, -2.0);
      expect(res).to.equal(-4.0);
    });

    it('positive and negative numbers', () => {
      let res = calculateNumber('SUM', 2.0, -2.0);
      expect(res).to.equal(0);
    });

    it('negative and positive numbers', () => {
      let res = calculateNumber('SUM', -2.0, 2.0);
      expect(res).to.equal(0);
    });

    it('0 and 0', () => {
      let res = calculateNumber('SUM', 0.0, 0.0);
      expect(res).to.equal(0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    let res = calculateNumber('SUBTRACT', 0.0, 0.0);
    it('0 and 0', () => {
      expect(res).to.equal(0);
    });

    it('equal positive numbers (alternate)', () => {
      let res = calculateNumber('SUBTRACT', 2.3, 1.8);
      expect(res).to.equal(0);
    });
    
    it('equal positive numbers', () => {
      let res = calculateNumber('SUBTRACT', 2.0, 2.0);
      expect(res).to.equal(0);
    });

    it('equal negative numbers', () => {
      let res = calculateNumber('SUBTRACT', -2.0, -2.0);
      expect(res).to.equal(0);
    });

    it('equal negative numbers (alternate)', () => {
      let res = calculateNumber('SUBTRACT', -2.3, -1.8);
      expect(res).to.equal(0);
    });
    
    it('positive and negative numbers', () => {
      let res = calculateNumber('SUBTRACT', 2.0, -2.0);
      expect(res).to.equal(4);
    });
    
    it('negative and positive numbers', () => {
      let res = calculateNumber('SUBTRACT', -2.0, 2.0);
      expect(res).to.equal(4);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('numbers with different signs', () => {
      let res = calculateNumber('DIVIDE', -7.0, 2.0);
	  expect(res).to.equal(-3.5);
    });
    
    it('positive numbers', () => {
      let res = calculateNumber('DIVIDE', 8.0, 2.0);
	  expect(res).to.equal(4.0);
    });

    it('negative numbers', () => {
      let res = calculateNumber('DIVIDE', -7.0, -2.0);
	  expect(res).to.equal(3.5);
    });

    it('equal positive numbers', () => {
      let res = calculateNumber('DIVIDE', 2.0, 2.0);
	  expect(res).to.equal(1.0);
    });
    
    it('numbers with different signs (alternate)', () => {
      let res = calculateNumber('DIVIDE', 7.0, -2.0);
	  expect(res).to.equal(-3.5);
    });

    it('equal rounded up numbers', () => {
      let res = calculateNumber('DIVIDE', 2.6, 3.0);
	  expect(res).to.equal(1);
    });

    it('equal negative numbers', () => {
      let res = calculateNumber('DIVIDE', -2.0, -2.0);
	  expect(res).to.equal(1);
    });

    it('equal rounded down numbers', () => {
      let res = calculateNumber('DIVIDE', 2.4, 2.0);
	  expect(res).to.equal(1);
    });

    it('0 and negative number', () => {
      let res = calculateNumber('DIVIDE', 0.0, -5.0);
	  expect(res).to.equal(-0);
    });
    
    it('0 and positive number', () => {
      let res = calculateNumber('DIVIDE', 0.0, 5.0);
	  expect(res).to.equal(0);
    });

    it('positive number and number rounded down to 0', () => {
      let res = calculateNumber('DIVIDE', 5.0, 0.2);
	  expect(res).to.equal('Error');
    });
    
    it('positive number and 0', () => {
      let res = calculateNumber('DIVIDE', 5.0, 0);
	  expect(res).to.equal('Error');
    });

    it('negative number and 0', () => {
      let res = calculateNumber('DIVIDE', -5.0, 0);
	  expect(res).to.equal('Error');
    });

    it('positive number and number rounded up to 0', () => {
      let res = calculateNumber('DIVIDE', 5.0, -0.2);
	  expect(res).to.equal('Error');
    });

    it('0 and 0', () => {
      let res = calculateNumber('DIVIDE', 0.0, 0.0);
	  expect(res).to.equal('Error');
    });
    
    it('negative number and number rounded down to zero', () => {
      let res = calculateNumber('DIVIDE', -5.0, 0.2);
	  expect(res).to.equal('Error');
    });

    it('negative number and number rounded up to zero', () => {
      let res = calculateNumber('DIVIDE', -5.0, -0.2);
	  expect(res).to.equal('Error');
    });

  });
});