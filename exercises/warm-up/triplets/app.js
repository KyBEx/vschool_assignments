// given an array of integers, return true if it does not contain 3 duplicate ints in a row

const triplet = (arr) => {
    const isTrue = arr.filter((item, index, array) => (item === array[index +1] && item === array[index +2]))
    return isTrue.length !== 0 ? false : true
}

console.log(triplet([1,2,1,1,1]))
