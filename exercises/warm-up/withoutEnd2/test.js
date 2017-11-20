let chai = require("chai");
let assert = chai.assert;
let test = require ('./app.js')


describe("Return a string without the first and last character of the string", ()=> {
    it("Should remove first and last character of the string", () => {
        assert.deepEqual(test("cat"), "a")
    })
})
