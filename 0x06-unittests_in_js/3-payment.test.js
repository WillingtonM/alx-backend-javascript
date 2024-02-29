const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./3-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", function() {
    it("check that Utils.calculateNumber was called once", function() {
		const util_spy = sinon.spy(Utils, 'calculateNumber');
		const log_spy = sinon.spy(console, 'log');

		const api_request = sendPaymentRequestToApi(100, 20);

		expect(util_spy.calledOnceWithExactly('SUM', 100, 20)).to.equal(true);
		expect(log_spy.calledWithExactly('The total is: 120')).to.equal(true);
		expect(utils.calculateNumber('SUM', 100, 20)).to.equal(api_request);

		util_spy.restore();
		log_spy.restore();
    });
});
