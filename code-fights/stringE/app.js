// Return true if the given string contains between 1 and 3 'e' chars.

var stringE=function(str){
    const arrE = str.match(/e/gi);
    if (arrE.length >=1 && arrE.length <=3) {
        return true
    }
    return false
}

console.log(stringE("hlloE"))
