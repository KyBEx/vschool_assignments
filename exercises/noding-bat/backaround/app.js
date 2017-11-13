// Given a string, take the last char and return a new string with
// the last char added at the front and back, so 'cat' yields 'tcatt'/
// The original string will be length 1 or more.

var backAround = function(str){
    let end = str.slice(str.length -1);
    return `${end}${str}${end}`
}

console.log(backAround("cat"))

module.exports = backAround;
