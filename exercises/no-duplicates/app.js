var result = '';
  var dupes = '';

function unique(str) {
  for(var i = 0; i < str.length; i++) {
    if(result.indexOf(str[i]) === -1) {
      result += str[i];
    } else {
      dupes = dupes + str[i];
    }
  }
}

unique('abcdab');
// unique('aaabbc')

console.log(result);
console.log(dupes);