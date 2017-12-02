function makeArrayConsecutive2(statues) {
    const arr = statues.sort((a,b) => {
        return a- b
    })
    const consolidated = arr.map((item, index, array) => {
        let counter = 0;

        if (array[index] - array[index +1] !== -1 && Number.isNaN(array[index] - array[index +1]) === false) {
            counter = counter + (array[index +1] - array[index]) - 1
        } else {
            counter = counter
        }

        return counter
    })

    return consolidated.reduce((acc, start) => {
        return acc + start
    })
}

console.log(makeArrayConsecutive2([3,2,1,5]))
