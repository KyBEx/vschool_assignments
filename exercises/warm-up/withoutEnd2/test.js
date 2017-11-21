const chai = require("chai");
const assert = chai.assert;
const test = require('./app.js')


describe("Return a string without the first and last character of the string", ()=> {
    it("Should remove first and last character of the string", () => {
        assert.deepEqual(test("cat"), "a")
    })
})
