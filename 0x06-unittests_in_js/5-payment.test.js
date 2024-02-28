const {describe, it} = require("mocha");
const sinon = require("sinon");
const sendPaymentRequestToApi = require("./5-payment");
const expect = require("chai").expect;

describe('sendPaymentRequestToApi', () => {
  let util_spy;

  beforeEach(() => {
    if (!util_spy) {
      util_spy = sinon.spy(console);
    }
  });

  afterEach(() => {
    util_spy.log.resetHistory();
  });

  it('sendPaymentRequestToApi(100, 20) console logs "The total is: 120"', () => {
    sendPaymentRequestToApi(100, 20);
    expect(util_spy.log.calledWith('The total is: 120')).to.be.true;
    expect(util_spy.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) console logs "The total is: 20"', () => {
    sendPaymentRequestToApi(10, 10);
    expect(util_spy.log.calledWith('The total is: 20')).to.be.true;
    expect(util_spy.log.calledOnce).to.be.true;
  });
});