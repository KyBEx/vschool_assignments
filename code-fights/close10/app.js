// Given 2 int values, return whichever value is nearest to the value 10,
// or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute
// value of a number.

// need to compare the differences

var close10=function(a, b){
    let diffA = Math.abs(a - 10);
    let diffB = Math.abs(b - 10);
    if (diffA > diffB) {
        return b
    } else if (diffB > diffA) {
        return a
    } else {
        return 0
    }

}

console.log(close10(8, 13))
