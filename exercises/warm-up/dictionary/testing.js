var chai = require('chai');
var assert = chair.assert;
var checkWord = require('./app.js');


describe("You have a dictionary.  You want to add and lookup words", function() {
    it("should store the word if it isn't already in the dictionary", function() {
        // test for adding;
        addWord('boot', 'a type of shoe');
        assert.equal(lookupWord('boot'), ('a type of shoe'))
    });
    it("should return null when we lookup a word not present", function() {
        // test
    });
})
