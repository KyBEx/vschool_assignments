// UNIT TESTING

// describe("description of your function", function(){

//
//
// })
// // example below
// describe("A function to check if two arguments add up to 4", function(){
//     it("Should return true if sum of arguments is 4", function(){
//         // named function
//     });
//     it("Should return false if sum doesn't equal 4", function(){
//         // named function
//     })
// })

var chai = require('chai');
var assert = chai.assert;
var palindrome = require('./app.js');
//
// describe("A function to check if two arguments add up to 4", function(){
//     it("should return true if the arguments add up to 4", function(){
//
//         assert.equal(add(2,2), true);
//     });
//
//    it("should return false if the arguements don't add up to 4", function(){
//
//       assert.equal(add(4,1), false);
//     });
// });


describe("A function to check if an argument is the same forwards and backwards", function() {
    it("should return true if arguemnt is palindrome", function() {
        assert.equal(palindrome('star rats'), true);
    });
    it('should return false if argument is not palindrome', function() {
        assert.equal(palindrome('palindrome'), false)
    });
    it('should return true if the argument contains punc and is a palindrome', function(){
        assert.equal(palindrome('tAco! CAt!'), palindrome('tacocat'));
    })
})
