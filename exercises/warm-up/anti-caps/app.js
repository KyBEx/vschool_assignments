//have to loop through a string and check to see if the character is caps or not
//if it is caps, change to lowercase
//if it isn't caps, change to uppercase
//return the new string with the changed casing



// function funkyCaps (string) {
//     var newString = string;
//     for (var i = 0; i < string.length; i++) {
//         if (string[i] === string[i].toUpperCase()) {
//             newString = newString.concat(string[i].toLowerCase());
//         } else {
//             newString = newString.concat(string[i].toUpperCase());
//         }
//
//     };
//     newString = newString.slice(string.length);
//     console.log(newString);
// }
//
// funkyCaps("SweeTTeYY");

//alternate solution (luke's)
// function antiCaps(str){
//   var newString = [];
//   var splitWord = str.split('');
//   for (var i = 0; i < str.length; i++){
//     if (splitWord[i] === splitWord[i].toUpperCase()){
//       newString.push(splitWord[i].toLowerCase());
//     } else if (splitWord[i] === splitWord[i].toLowerCase()){
//       newString.push(splitWord[i].toUpperCase());
//     }
//   }return newString.join('')
// }
// antiCaps('kILL mE');

//COULD ALSO USE TERNARY OPERATOR
