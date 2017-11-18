function isPalindrome (string) {
  let regArr = string.toLowerCase().split('').join("");
  let backArr = regArr.split("").reverse().join("");

  if (regArr === backArr) {
    return true
  } else {
    return false
  }

}

console.log(isPalindrome("cat"))
