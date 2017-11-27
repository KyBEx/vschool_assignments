var readline = require("readline-sync");

let num1 = Number(readline.question("Please enter you first number:  "));
let num2 = Number(readline.question("Please enter your second number:  "));
console.log(typeof num1)

const addNums = (num1, num2) =>  num1 + num2;
const subtractNums = (num1, num2) =>  num1 - num2;
const multiplyNums = (num1, num2) =>  num1 * num2;
const divideNums = (num1, num2) =>  num1 / num2;
const optionsNums = ["add", "subtract", "multiply", "divide"];
let output = readline.keyInSelect(optionsNums, "What operations would you like to perform?");
switch(output) {
    case 0:
        output = addNums(num1,num2);
        console.log(`The result is ${output}`)
        break;
    case 1:
        output = subtractNums(num1, num2);
        console.log(`The result is ${output}`)
        break;
    case 2:
        output = multiplyNums(num1, num2);
        console.log(`The result is ${output}`)
        break;
    case 3:
        output = divideNums(num1, num2);
        console.log(`The result is ${output}`)
        break;
    default:
        console.log("You did not enter a selection")

}
