// Validates the usage of the Utils function
const sinon = require('sinon');
const Utils = require('./utils');
const expect = require("chai").expect;
const sendPaymentRequestToApi = require('./4-payment');

describe("sendPaymentRequestToApi", function() {
    it("checks Utils.calculateNumber was called once", function() {
	const stub = sinon.stub(Utils, "calculateNumber").returns(10);
	const spy = sinon.spy(console, "log");

	sendPaymentRequestToApi(100, 20);

	expect(stub.calledOnce).to.be.true;
        expect(stub.calledWithExactly("SUM", 100, 20)).to.be.true;
        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWithExactly("The total is: 10")).to.be.true;

	stub.restore();
	spy.restore();
    });
});
