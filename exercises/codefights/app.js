// function quasifactorial(n) {
//   var answer = 1;
//   for (var i = 2; i <= n; ++i) {
//     answer = answer * i;
//     --answer;
//   }
//
//   return answer;
// }
//
//
//
// console.log(quasifactorial(4));
// 4! = 4
// $!
//
// ((1*2)-1)*3-1*4-1
//
// (((1*2)-1)*3-1)*4-1

//second problem; Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
function centuryFromYear(year) {
    return year%100 ? Math.floor(year/100)+1 : Math.floor(year/100)

}
//Given the string, check if it is a palindrome.
function checkPalindrome(inputString) {
    var test = inputString.split(" ");
    console.log(test);
    var test2 = test.reverse();
    console.log(test2);
    console.log(test.join(""));
    if (test.join("") === test2.join("")) {
        return true
    }
}

console.log(checkPalindrome("teett"));
