var chai = require('chai');
var assert = chai.assert;

// var test = require("./app.js");
//
// describe("Should return the sum of two numbers", function() {
//     it("Should add the numbers together", function() {
//         assert.equal(test(2,3), 5);
//         assert.equal(test(2,2), 4)
//     });
//
//
// })

var noDupes = require("./app.js");

describe("Return a of only the non-duplicated characters in a given string", function() {
    it("Should only have characters that appear once", function () {
        assert.deepEqual(noDupes("This string"), "hrng");
    })
})
