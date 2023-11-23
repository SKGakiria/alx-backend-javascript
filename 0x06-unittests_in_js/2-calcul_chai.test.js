// Test cases for function to handle different operations using Chai
const expect = require("chai").expect;
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber()", function() {
   describe('type == "SUM"', function() {
	it(`checking if numbers rounded`, function() {
	     expect(calculateNumber("SUM", 1.0, 2.0)).to.equal(3);
        });
    
        it(`checking if numbers rounded`, function() {
             expect(calculateNumber("SUM", 2.4, 2.4)).to.equal(4);
        });

        it(`checking if numbers rounded`, function() {
             expect(calculateNumber("SUM", -2.3, -1.9)).to.equal(-4);
        });
   });

   describe('type == "SUBTRACT"', function() {
        it(`checking if numbers rounded`, function() {
	     expect(calculateNumber("SUBTRACT", 3.4, 1.8)).to.equal(1);
        });

        it(`checking if numbers rounded`, function() {
             expect(calculateNumber("SUBTRACT", 3.0, 2.0)).to.equal(1);
        });

        it(`checking if numbers rounded`, function() {
	     expect(calculateNumber("SUBTRACT", -2.3, -1.8)).to.equal(0);
        });
   });

   describe('type == "DIVIDE"', function() {
        it(`checking if numbers rounded`, function() {         
	     expect(calculateNumber("DIVIDE", 4, 2)).to.equal(2);
        });
   
        it(`checking if numbers rounded`, function() {          
	     expect(calculateNumber("DIVIDE", 5.0, 0.2)).to.equal("Error");
        });

        it(`checking if numbers rounded`, function() {          
	     expect(calculateNumber("DIVIDE", -7.0, -2.0)).to.equal(3.5);
        });
   });
});
