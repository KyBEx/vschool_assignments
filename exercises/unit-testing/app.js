// var add = function (num1, num2) {
//     return num1 + num2 === 4
// }


// Note to self: you don't have to make forward an array
var palindrome = function(string) {
    var forward;
    var backwards;
    forward = string.replace(/\W/g, "").toLowerCase();
    backwards = string.replace(/\W/g, "");
    // forward = forward.toLowerCase().split(""); -- this code is extraneous
    backwards = backwards.split("").reverse().join("").toLowerCase();
    // backwards = backwards.reverse(); -- this code is extraneous--can do everything to the backwards variable on same line
    // forward = forward.join("") -- this code is extraneous
    // backwards = backwards.join("")--not needed
    if (forward === backwards) {
        return true
    } else {
        return false
    }

};
console.log(palindrome("race0boat"))
module.exports = palindrome;
