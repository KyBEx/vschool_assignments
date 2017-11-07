var chai = require('chai');
var assert = chai.assert;
var isIP = require('./app.js');

describe("Testing to see if a string matches the IPv4 format conventions", function() {
    it("should return true when it's a valid IP number", function() {
        assert.isTrue(isIP('0.255.1.34'));
    });
    it("should return false if a letter is included", function() {
        assert.isFalse(isIP('8b.80.2.1'));
    });
    it("should return false if there is a NaN aka blank space", function() {
        assert.isFalse(isIP("30..4.1"));
    });

    it("should return false if there are less than four numbers", function() {
        assert.isFalse(isIP("30.30.1"));
    });
    it("should return false if one of the numbers is larger than 255 or smaller than 0", function() {
        assert.isFalse(isIP("300.1.1.1"));
    });
});
