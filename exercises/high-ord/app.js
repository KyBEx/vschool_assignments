// function heyOh (arr, f) {
//     return f(arr)
// }

// function checkTrue (arr) {
//     const results = arr.map(item => {
//         if ( typeof item === "number") {
//             return true
//         }
//
//     })
//     console.log(results)
//     return results.length === arr.length ? true : false
// }

// console.log(checkTrue([1, 3, "l"]))


// console.log(heyOh([1, 3, "3"], checkTrue))

// console.log(checkTrue([1,2,4]))

function isSome (arr, f) {
    return f(arr)
}

function kindaTrue(arr) {
    const results = arr.map( item => {
        if(typeof item === "number") {
            return true
        } else {
            return false
        }

    })
    console.log(results)

    return results.indexOf(true) !== -1 ? true : false
}

// console.log(kindaTrue(["1","2","3"]))

// console.log(isSome(["1","2","3"], kindaTrue))



function allNums (arr, f) {
    return f(arr)
}

// function checkTrue (arr) {
//     const results = arr.map(item => {
//         if ( typeof item === "number") {
//             return true
//         }
//
//     })
//     console.log(results)
//     return results.length === arr.length ? true : false
// }

// function checkTrue (arr) {
//     const newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "number") {
//             newArr.push(true)
//         }
//     }
//     return newArr.length === arr.length ? true : false
//
// }
//
// console.log(allNums([1,2,3,], checkTrue))



function every(arr, f) {
    for (let i = 0; i < arr.length; i++){
        if (!f(arr[i])){
            return false
        };
    }
    return true;
}

function checkTrue (theSingleNumber) {
    return typeof theSingleNumber === "number"
}

// console.log(every([1,2,"3"], checkTrue))

function some(arr, f) {
    for (let i =0; i < arr.length; i++) {
        if(f(arr[i])) {
            return true
        };
    }
    return false;
}

console.log(some(["1","2",1], checkTrue))
