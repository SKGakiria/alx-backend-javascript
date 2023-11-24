// Testing for Post integration
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

describe("Cart page", function() {
  const API_URL = 'http://localhost:7865';

  it('GET /cart/:id returns correct response for valid :id', function(done) {
    request.get(`${API_URL}/cart/54`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 54');
      done();
    });
  });

  it('GET /cart/:id returns 404 response for negative number values in :id', function(done) {
    request.get(`${API_URL}/cart/-54`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns 404 response for NOT a number value in :id', function(done) {
    request.get(`${API_URL}/cart/lock`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
