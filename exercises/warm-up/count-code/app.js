// find the string 'code' in a given line
// modify to accept any letter for the 'd'
// if slice of first two letters = 'co' AND the last letter = "e", return c+3 letters


// console.log(countCode("This code is a mode of code").length);

function countCode (string) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string.slice(i,i + 2) === "co" && string.slice(i+3, i + 4) === "e") {
        // console.log(count.push(string.slice(i, i+4)))
        count++
      }
  } console.log(count);
}

countCode("This coze code is my cope for code");

// var string = "this code";
// for (var i = 0; i < string.length; i++) {
//     if (string.slice(i+3, i+4)==="e") {
//         console.log("Yes")
//     }
// }

// string.slice(i, i+2)==="co"
