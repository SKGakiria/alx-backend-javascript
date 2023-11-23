// Test cases for function to handle different operations
const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber()", function() {

    it(`checking if numbers rounded`, function() {
      const res = calculateNumber("SUM", 1.0, 2.0);
      assert.strictEqual(res, 3);
    });
    it(`checking if numbers rounded`, function() {
      const res = calculateNumber("SUBTRACT", 3.4, 1.8);
      assert.strictEqual(res, 1);
    });
    it(`checking if numbers rounded`, function() {
      const res = calculateNumber("SUBTRACT", -2.3, -1.8);
      assert.strictEqual(res, 0);
    });
    it(`checking if numbers rounded`, function() {
      const res = calculateNumber("DIVIDE", 4, 2);
      assert.strictEqual(res, 2);
    });
    it(`checking if numbers rounded`, function() {
      const res = calculateNumber("DIVIDE", 5.0, 0.2);
      assert.strictEqual(res, "Error");
    });
    it(`checking if numbers rounded`, function() {
      const res = calculateNumber("DIVIDE", -7.0, -2.0);
      assert.strictEqual(res, 3.5);
    });
});
