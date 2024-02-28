const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");
const assert = require("assert");

describe("sendPaymentRequestToApi", function() {
    it("check that Utils.calculateNumber was called once", function() {
		const util_spy = sinon.spy(Utils);

		sendPaymentRequestToApi(100, 20);
		expect(util_spy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
		expect(util_spy.calculateNumber.callCount).to.be.equal(1);
		util_spy.calculateNumber.restore();
    });
});
