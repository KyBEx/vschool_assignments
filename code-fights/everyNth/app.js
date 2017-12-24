// Given a non-empty string and an int N, return the string made starting with char 0,
// and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on.
// N is 1 or more.

var everyNth=function(str, n){
    let iTracker = 0
    if (str === "") return;
    const strArr = str.split("").filter((letter, i) => {
        if (i === iTracker) {
            iTracker=iTracker+n;
            return true
        }
    })
    return strArr.join("");
}

console.log(everyNth("Chocolates", 2))
