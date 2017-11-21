// Given two strings, a and b, return the result of putting them together in the
// order abba, e.g. 'Hi' and 'Bye' returns 'HiByeByeHi'.

const chai = require('chai');
const assert = chai.assert;
const test = require('./app.js');

describe("Return two strings in abba order", () => {
    it("Should take x and y and return xyyx", () => {
        assert.equal(test("a", "b"), "abba")
    })
})
