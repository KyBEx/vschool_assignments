// function passGen (num) {
//     var letterTest = [];
//     var passWord;
//     for (var i = 0; i < num; i++) {
//         letterTest[i] = String.fromCharCode(21 + Math.random() * (100 - 21));
//     }
//     passWord = letterTest.join("");
//     console.log(passWord);
// }
// passGen(13);

//need code to generate random uppercase, lowercase, numeric and symbol characaters
//need to pass an integer that will control the length of the password
//1 equals a length of 1, 2 equals a length of 2; need to concat the rando characters based on the numeric

//var letterTest = String.fromCharCode(21 + Math.random() * (100 - 21));
//console.log(letterTest);
//
// function passGen(num) {
//   var password = "";
//   var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";
//
//   for (i = 0; i < num; i++) {
//     password += charset.charAt(Math.floor(Math.random() * charset.length));
//   }
//   console.log(password);
// }
//
// passGen(10);

let x = 150505050505

console.log(Math.random().toString(16).slice(2,8))
console.log(Math.random())
console.log(Math.random().toString(16))
console.log(x.toString(16))
