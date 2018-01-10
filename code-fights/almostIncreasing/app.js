// [1,3,2] --- true
// [1,5,3,2] --- false
// [0, -2, 5, 6] -- true
// [1, 2, 5, 3, 5] -- true
// [10, 1, 2, 3, 4, 5, 6, 1] -- false
// [1,5,2,4,6]--true
// [10,11,13,1]--true
// [1,2,5,5,5]--false
// [1,5,2,5,5]--false
// [1,2,3,4,5,3,5,6]--false
// [6,1,2,3,4,6]
// Given a sequence of integers as an array, determine whether it is possible
 // to obtain a strictly increasing sequence by removing no more than one element from the array.


// [3, 5, 67, 98, 3]--true
// [30,40,50,60,10,20]--false
// [10, 1, 2, 3, 4, 5]--true
// [1,5,2,5,5]--false
// [1,2,3,4,5,3,5,6]--false

// situations where it would be false
// decreasing sequence--more than one instance



function almostIncreasingSequence(sequence) {
    let decreasing = 0;
    for (let i = 0; i < sequence.length -1; i++) {
        if (sequence[i] > sequence[i+1]) {
            decreasing+=1
        }
    }
    decreasing >=2 ? false : true
}

console.log(almostIncreasingSequence([3, 5, 67, 98, 3]))


// for (let i = 0; i <sequence.length-1; i++) {
//     if (sequence[i] > sequence[i+1]) {
//         greater1+=1
//     }
//
//     if (sequence[i]===sequence[i+1] || sequence[i]===sequence[i+2]) {
//         equal+=1;
//     }
// }
