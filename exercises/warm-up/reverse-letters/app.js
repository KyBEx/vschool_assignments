// var str = "cat";
// var arr = str.split("")
// var first = arr.shift()
// var last = arr.pop()
// var reverse = last.toString()+arr.toString()+first.toString()
// console.log(reverse)

let frontBack = (str) => {
    let arr = str.split("")
    let first = arr.shift()
    let last = arr.pop()
    let reverse = last.toString()+arr.toString()+first.toString()
    return reverse
}

console.log(frontBack("cat"))
