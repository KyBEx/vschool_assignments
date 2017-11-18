function adjacentElementsProduct(inputArray) {
    const prodArr = inputArray.map((item, index) => {
        return item * inputArray[index + 1]
    })
    prodArr.pop();
    console.log(prodArr);

    const finalNum = prodArr.reduce((prev, curr) => {
        return Math.max(prev, curr)
        })
    return finalNum
}

console.log(adjacentElementsProduct([3,4,5]))
