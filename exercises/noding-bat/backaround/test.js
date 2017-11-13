var chai = require('chai');
var assert = chai.assert;

let backAround = require("./app.js");

describe("take a string and return it with the last letter added to the front and the back", function() {
    it("should pass if the final letter is added to the front and the back of the string" , function () {
        assert.deepEqual(backAround("This string"), "gThis stringg");
    })
})
