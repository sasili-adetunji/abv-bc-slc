/* JAsmine Test functions to test prime numbers generation from 0 to n

Programmed by Sasiliyu Adetunji
Andela Abuja Bootcamp Self Leearning Clinic
Date: 15 May, 2017.

*/

const expect = require('jasmine-expect');
const getPrimes = require('getPrimes.js');

describe("Prime number generator", function() {
    it("should return an array containing '2,3,5,7' for (9)", function(){
        expect(getPrimes(9)).toEqual([2,3,5,7]);
    });

    it("should return an array containing '2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47' for (50)", function(){
        expect(getPrimes(50)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
    });

    it("should return an empty array for (0)", function(){
        expect(getPrimes(0)).toEqual([]);
    });

    it("should return an array containing '2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47' for (52)", function(){
        expect(getPrimes(52)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
    });

    it("should return an array '2, 3, 5, 7, 11, 13' for (15)", function(){
        expect(getPrimes(15)).toEqual([2, 3, 5, 7, 11, 13]);
    });

    it("should return 'Error: Invalid input' for ('adetunji')", function(){
        expect(getPrimes('adetunji')).toEqual('Invalid input');
    });

    it("should return 'Error: Invalid input' for ('sasiliyu')", function(){
        expect(getPrimes('sasiliyu')).toEqual('Invalid input');
    });

    it("should return 'Error: Negative numbers not allowed' for (-15)", function(){
        expect(getPrimes(-15)).toEqual('Negative numbers not allowed');
    });

    it("should return 'Error: Negative numbers not allowed' for (-25)", function(){
        expect(getPrimes(-25)).toEqual('Negative numbers not allowed');
    });

    it("should return an empty array for (-0)", function(){
        expect(getPrimes(-0)).toEqual([]);
    });

});