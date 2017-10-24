// Given an int n, return True if it is within 10 of 100 or 200.
// Note: abs(num) computes the absolute value of a number.

nearHundred = function(n){
    if ((n < 90 || n > 110) && (n < 190 || n > 210)) {
        return false;
    } else {
        return true;
    }
};
console.log(nearHundred(1));
