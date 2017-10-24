//given 2 strings, return their concatenation, except omit the first char of each
//The strings will be at least length 1

// var nonStart = function(a, b) {
//     console.log(a.substr(1) + " " + b.substr(1));
// };
//
// nonStart("sleep", "coffee");
//
// var x = "sleep".substr(1);
//
// console.log(x);


// var nonStart = function(a, b) {
//     console.log(a.substr(1) + b.substr(1));
// };
//
// nonStart("x", "xc");


// var nonStart = function(a, b) {
//     console.log(a.substr(1) + b.substr(1));
//
// }
//   nonStart("x", "ac");

var nonStart = function(a, b) {
    return a.substr(1).concat(b.substr(1));

};
nonStart("hello", "there");
