// Test cases using Hook functions
const sinon = require('sinon');
const expect = require("chai").expect;
const sendPaymentRequestToApi = require('./5-payment');

describe("sendPaymentRequestToApi", function() {
  let spy;

  beforeEach(function() {
    spy = sinon.spy(console, "log");
  });

  afterEach(function() {
    spy.restore();
  });

  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', function() {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledWithExactly('The total is: 120')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', function() {
    sendPaymentRequestToApi(10, 10);
    expect(spy.calledWithExactly('The total is: 20')).to.be.true;
    expect(spy.calledOnce).to.be.true;
  });
});
