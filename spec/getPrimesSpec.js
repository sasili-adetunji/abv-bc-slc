/* JAsmine Test functions to test prime numbers generation from 0 to n

Programmed by Sasiliyu Adetunji
Andela Abuja Bootcamp Self Leearning Clinic
Date: 15 May, 2017.

*/

const myApp = require('../src/getPrimes.js');

describe("Prime number generator", function() {
    it("should return an array containing '2,3,5,7' for (9)", function(){
        expect(myApp.getPrimes(9)).toEqual([2,3,5,7]);
    });

    it("should return an array containing '2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47' for (50)", function(){
        expect(myApp.getPrimes(50)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
    });

    it("should return an empty array for (0)", function(){
        expect(myApp.getPrimes(0)).toEqual([]);
    });

    it("should return an array containing '2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47' for (52)", function(){
        expect(myApp.getPrimes(52)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
    });

    it("should return an array '2, 3, 5, 7, 11, 13' for (15)", function(){
        expect(myApp.getPrimes(15)).toEqual([2, 3, 5, 7, 11, 13]);
    });

    it("should return an array containing '2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59' for (60)", function(){
        expect(myApp.getPrimes(60)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59]);
    });

    it("should return an array containing 2, 3, 5, 7, 11, 13' for (13)", function(){
        expect(myApp.getPrimes(13)).toEqual([2, 3, 5, 7, 11, 13]);
    });

    it("should return an array containing '2' for (2)", function(){
        expect(myApp.getPrimes(2)).toEqual([2]);
    });

    it("should return array containing '2, 3, 5, 7, 11, 13, 17, 19' for (22)", function(){
        expect(myApp.getPrimes(22)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    });

    it("should return an empty array for (-0)", function(){
        expect(myApp.getPrimes(-0)).toEqual([]);
    });

});