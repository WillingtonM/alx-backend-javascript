const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  const res = null;

  describe('type == "SUM"', () => {
    it('equal positive numbers (alternate)', () => {
      res = calculateNumber('SUM', 2.3, 1.8);
      expect(res).to.equal(4.0);
    });
    
    it('equal positive numbers', () => {
      res = calculateNumber('SUM', 2.0, 2.0);
      expect(res).to.equal(4.0);
    });

    it('equal negative numbers (alternate)', () => {
      res = calculateNumber('SUM', -2.3, -1.8);
      expect(res).to.equal(-4.0);
    });

    it('equal negative numbers', () => {
      res = calculateNumber('SUM', -2.0, -2.0);
      expect(res).to.equal(-4.0);
    });

    it('positive and negative numbers', () => {
      res = calculateNumber('SUM', 2.0, -2.0);
      expect(res).to.equal(0);
    });

    it('negative and positive numbers', () => {
      res = calculateNumber('SUM', -2.0, 2.0);
      expect(res).to.equal(0);
    });

    it('0 and 0', () => {
      res = calculateNumber('SUM', 0.0, 0.0);
      expect(res).to.equal(0);
    });
  });

  describe('type == "SUBTRACT"', () => {
    res = calculateNumber('SUBTRACT', 0.0, 0.0);
    it('0 and 0', () => {
      expect(res).to.equal(0);
    });

    it('equal positive numbers (alternate)', () => {
      res = calculateNumber('SUBTRACT', 2.3, 1.8);
      expect(res).to.equal(0);
    });
    
    it('equal positive numbers', () => {
      res = calculateNumber('SUBTRACT', 2.0, 2.0);
      expect(res).to.equal(0);
    });

    it('equal negative numbers', () => {
      res = calculateNumber('SUBTRACT', -2.0, -2.0);
      expect(res).to.equal(0);
    });

    it('equal negative numbers (alternate)', () => {
      res = calculateNumber('SUBTRACT', -2.3, -1.8);
      expect(res).to.equal(0);
    });
    
    it('positive and negative numbers', () => {
      res = calculateNumber('SUBTRACT', 2.0, -2.0);
      expect(res).to.equal(4);
    });
    
    it('negative and positive numbers', () => {
      res = calculateNumber('SUBTRACT', -2.0, 2.0);
      expect(res).to.equal(4);
    });
  });

  describe('type == "DIVIDE"', () => {
    it('numbers with different signs', () => {
      res = calculateNumber('DIVIDE', -7.0, 2.0);
	  expect(res).to.equal(-3.5);
    });
    
    it('positive numbers', () => {
      res = calculateNumber('DIVIDE', 8.0, 2.0);
	  expect(res).to.equal(4.0);
    });

    it('negative numbers', () => {
      res = calculateNumber('DIVIDE', -7.0, -2.0);
	  expect(res).to.equal(3.5);
    });

    it('equal positive numbers', () => {
      res = calculateNumber('DIVIDE', 2.0, 2.0);
	  expect(res).to.equal(1.0);
    });
    
    it('numbers with different signs (alternate)', () => {
      res = calculateNumber('DIVIDE', 7.0, -2.0);
	  expect(res).to.equal(-3.5);
    });

    it('equal rounded up numbers', () => {
      res = calculateNumber('DIVIDE', 2.6, 3.0);
	  expect(res).to.equal(1);
    });

    it('equal negative numbers', () => {
      res = calculateNumber('DIVIDE', -2.0, -2.0);
	  expect(res).to.equal(1);
    });

    it('equal rounded down numbers', () => {
      res = calculateNumber('DIVIDE', 2.4, 2.0);
	  expect(res).to.equal(1);
    });

    it('0 and negative number', () => {
      res = calculateNumber('DIVIDE', 0.0, -5.0);
	  expect(res).to.equal(-0);
    });
    
    it('0 and positive number', () => {
      res = calculateNumber('DIVIDE', 0.0, 5.0);
	  expect(res).to.equal(0);
    });

    it('positive number and number rounded down to 0', () => {
      res = calculateNumber('DIVIDE', 5.0, 0.2);
	  expect(res).to.equal('Error');
    });
    
    it('positive number and 0', () => {
      res = calculateNumber('DIVIDE', 5.0, 0);
	  expect(res).to.equal('Error');
    });

    it('negative number and 0', () => {
      res = calculateNumber('DIVIDE', -5.0, 0);
	  expect(res).to.equal('Error');
    });

    it('positive number and number rounded up to 0', () => {
      res = calculateNumber('DIVIDE', 5.0, -0.2);
	  expect(res).to.equal('Error');
    });

    it('0 and 0', () => {
      res = calculateNumber('DIVIDE', 0.0, 0.0);
	  expect(res).to.equal('Error');
    });
    
    it('negative number and number rounded down to zero', () => {
      res = calculateNumber('DIVIDE', -5.0, 0.2);
	  expect(res).to.equal('Error');
    });

    it('negative number and number rounded up to zero', () => {
      res = calculateNumber('DIVIDE', -5.0, -0.2);
	  expect(res).to.equal('Error');
    });

  });
});