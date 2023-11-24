// Test cases for function containing the sum of a and b
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('checking if numbers rounded', () => {
    const res = calculateNumber(1.0, 2.0);
    assert.strictEqual(res, 3);
  });
  it('checking if numbers rounded', () => {
    const res = calculateNumber(1.0, 2.4);
    assert.strictEqual(res, 3);
  });
  it('checking if numbers rounded', () => {
    const res = calculateNumber(2.6, 2.0);
    assert.strictEqual(res, 5);
  });
  it('checking if numbers rounded', () => {
    const res = calculateNumber(0, 0);
    assert.strictEqual(res, 0);
  });
  it('checking if numbers rounded', () => {
    const res = calculateNumber(-1.5, -1.8);
    assert.strictEqual(res, -3);
  });
  it('checking if numbers rounded', () => {
    const res = calculateNumber(2.6, 2.5);
    assert.strictEqual(res, 6);
  });
});
