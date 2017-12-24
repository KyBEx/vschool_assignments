// We'll say that a number is 'teen' if it is in the range 13..19 inclusive.
// Given 3 int values, return true if 1 or more of them are teen.

var hasTeen=function(a, b, c){

    for (item in arguments) {
        if (arguments[item] >= 13 && arguments[item] <=19) {
            return true
        }
    }
    return false

}

console.log(hasTeen(1,3,4, 13))
