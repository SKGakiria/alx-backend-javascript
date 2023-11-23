// Async test cases to handle function with a resolved promise
const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe("getPaymentTokenFromAPI", function() {
  it('getPaymentTokenFromAPI(success), where success == true', function(done) {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.deep.equal({data: 'Successful response from the API'});
        done();
      });
  });
}); 
