// need to search a string / array for duplicate words
// each word is of different length
// solution needs to find a duplicate and return ONE instance of it to a new array


const chai = require('chai');
let assert = chai.assert;
let returnDupesOnce = require('./app.js')

describe("Search a block of text for repeating words.  If a word repeats, display that one instance of each word in a separate array.", function() {
    it("Should fail if a duplicate word appears more than once in the array", function() {
        assert.deepEqual(returnDupesOnce("Test a a This this is a test Test"), ["a", "test", "this"])

    })
})
