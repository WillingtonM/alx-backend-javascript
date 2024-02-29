const expect = require("chai").expect;
const {describe, it} = require("mocha");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function() {
    describe("SUM", function() {
		let rslt = calculateNumber("SUM", 1, 2);
	it("checking if numbers round", function() {
	    expect(rslt).to.equal(3);
	});
	it("checking if numbers round", function() {
		let rslt = calculateNumber("SUM", 1.6, 2.6); 
	    expect(rslt).to.equal(5);
	});
    });
    describe("SUBTRACT", function() {
	it("checking if numbers round", function() {
		let rslt = calculateNumber("SUBTRACT", 1.4, 2.3); 
	    expect(rslt).to.equal(-1);
	});
	it("checking if numbers round", function() {
		let rslt = calculateNumber("SUBTRACT", 4.9, 2.7); 
	    expect(rslt).to.equal(2);
	});
	it("checking if numbers round", function() {
		let rslt = calculateNumber("SUBTRACT", -4.9, -2.7); 
	    expect(rslt).to.equal(-2);
	});
    });
    describe("DIVIDE", function() {
	it("checking if numbers round", function() {
		let rslt = calculateNumber("DIVIDE", 4, 2); 
	    expect(rslt).to.equal(2);
	});
	it("checking if numbers round", function() {
		let rslt = calculateNumber("DIVIDE", 4.6, 1.8); 
	    expect(rslt).to.equal(2.5);
	});
	it("checking if numbers round", function() {
		let rslt = calculateNumber("DIVIDE", 4, 0); 
	    expect(rslt).to.equal("Error");
	});
    });
});
