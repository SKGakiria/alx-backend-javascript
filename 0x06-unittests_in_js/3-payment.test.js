// Validates the usage of the Utils function
const sinon = require('sinon');
const Utils = require('./utils');
const expect = require("chai").expect;
const sendPaymentRequestToApi = require('./3-payment');

describe("sendPaymentRequestToApi", function() {
    it("checks Utils.calculateNumber was called once", function() {
	const spy = sinon.spy(Utils, "calculateNumber");

	sendPaymentRequestToApi(100, 20);

	expect(spy.calledOnce).to.be.true;
	spy.restore();
    });
});
