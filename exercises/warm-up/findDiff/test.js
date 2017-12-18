const chai = require('chai');
const assert = chai.assert;
const findDiff = require("./app");



describe("Return unique numbers/items from a group of arrays", ()=> {
    it("Should return an array", ()=> {
        assert.isTrue(Array.isArray(findDiff([1,2], [3,4])));
        assert.isTrue(Array.isArray(findDiff([1,2], [3,4])));
        assert.isTrue(Array.isArray(findDiff([], [])));
    });
    it("Should return an array of the items unique to each array", ()=> {
        assert.deepEqual(findDiff([1,2], [2, 3]), [1, 3])
    });
    it("Should return an empty array if there are no unique arguments", ()=> {
        assert.isEmpty(findDiff([1,1], [1,1]))
    });

})
