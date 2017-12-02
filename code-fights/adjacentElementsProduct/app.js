// function adjacentElementsProduct(inputArray) {
//     const prodArr = inputArray.map((item, index) => {
//         return item * inputArray[index + 1]
//     })
//     prodArr.pop();
//     console.log(prodArr);
//
//     const finalNum = prodArr.reduce((prev, curr) => {
//         return Math.max(prev, curr)
//         })
//     return finalNum
// }
//
// console.log(adjacentElementsProduct([3,4,5]))

// const inputArray = ["this","superman", "is","hutchinson", "an", "array", "mule"]

function combined (arr) {
    const infoObj = [];
    arr.map((item, index) => infoObj.push({
        chars: item.length,
        index: index
    }));

    const sums = [];
    for (let i = 0; i < infoObj.length - 2; i++) {
        sums.push({
            sum: infoObj[i].chars + infoObj[i + 1].chars + infoObj[i +2].chars,
            index: [infoObj[i].index, infoObj[i+1].index, infoObj[i+2].index]})
    }

    const finalPair = sums.reduce((prev, current) => {
        return (prev.sum > current.sum) ? prev : current
    })
    console.log(finalPair)
    return arr.splice(finalPair.index[0], 3)
}

// console.log(combined(inputArray))

// function adjacentDiff(arr) {
//     let combinedThrees = [];
//     for (let i = 0; i < arr.length - 2; i++) {
//         combinedThrees[i] = arr[i].length + arr[i+1].length + arr[i+2].length;
//     }
//     console.log(combinedThrees)
//     let index = combinedThrees.indexOf(Math.max(...combinedThrees));
//     (arr.length < 3) ? console.log(arr) : console.log([arr[index], arr[index+1], arr[index+2]])
// }
// const inputArray = ["this", "is","hutchinson", "an", "array", "mule"]
// adjacentDiff(inputArray)
