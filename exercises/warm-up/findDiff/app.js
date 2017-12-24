function findDiff(arr1, ...arrs) {
    console.log(arrs)
    const combinedArgs = [].concat.apply([], arrs);
    arr1.push(...combinedArgs)
    const unique = arr1.filter(item => {
        return arr1.indexOf(item) === arr1.lastIndexOf(item)
    })
    return unique
}

findDiff([4,2], [3,2], [1])

module.exports = findDiff
