// write a function that returns the sum of two numbers

// const test = (num1, num2) => num1 * num2
// console.log(test(2,2));
// module.exports = test;




//

// write a function that removes duplicate characters from a string

let stringToCheck = "This Ss"

let duplicates =[];
const noDupes = (str) => {
    let unique= "";
    let lowerCase = str.toLowerCase().replace(/\W/g, "");
    console.log(lowerCase);
    for (let i = 0; i <lowerCase.length; i++) {
        if (lowerCase.lastIndexOf(lowerCase[i]) == lowerCase.indexOf(lowerCase[i])) {
            unique += lowerCase[i];
        }
    }
    return unique;
}

// console.log(noDupes(stringToCheck));

// function removeDuplicateCharacters(string) {
//   return string
//     .split('')
//     .filter(function(item, pos, self) {
//         console.log(item, pos, self);
//         console.log(self.indexOf(item));
//       return self.indexOf(item) == pos;
//     })
//     .join('');
// }
// console.log(removeDuplicateCharacters('baraban'));
console.log(noDupes(stringToCheck))

module.exports = noDupes
