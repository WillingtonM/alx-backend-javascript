const {describe, it} = require("mocha");
const { expect } = require('chai');
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", function() {
    it("check that Utils.calculateNumber is stubbed", function() {
		const util_spy = sinon.spy(console);
		const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

		sendPaymentRequestToApi(100, 20);
		expect(stub.calledWith('SUM', 100, 20)).to.be.true;
		expect(stub.callCount).to.be.equal(1);
		expect(util_spy.log.calledWith('The total is: 10')).to.be.true;
		expect(util_spy.log.callCount).to.be.equal(1);
		stub.restore();
		util_spy.log.restore();
    });
});
