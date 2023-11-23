// Testing for Basic integration
const request = require('request');
const expect = require("chai").expect;

describe("Index page", function() {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', function(done) {
    request.get(`${API_URL}/`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
