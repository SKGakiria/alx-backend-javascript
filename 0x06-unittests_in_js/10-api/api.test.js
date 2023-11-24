// Testing for Post integration
const request = require('request');
const expect = require("chai").expect;

const API_URL = 'http://localhost:7865';

describe("Index page", function() {
  it('GET / returns correct response', function(done) {
    request.get(`${API_URL}/`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});

describe("Cart page", function() {
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

describe("Login", function() {
  it('POST /login returns right response', function(done) {
    request.post(`${API_URL}/login`, { json: { userName: 'JohnDoe' } }, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome JohnDoe');
      done();
    });
  });
});

describe("Available_payments page", function() {
  it('GET /available_payments returns right response', function(done) {
    request.get(`${API_URL}/available_payments`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.be.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
      done();
    });
  });
});
