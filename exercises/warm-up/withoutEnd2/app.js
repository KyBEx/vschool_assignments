function test (str) {
    // const arr = str.split("")
    // arr.shift();
    // arr.pop();
    // return arr.join("");
    return str.slice(1,-1)

}

console.log(test ("cat attack"))


module.exports = test

// could also do str.slice(1, -1) --- would do the same thing
