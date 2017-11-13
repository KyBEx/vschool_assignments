let textToSearch = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."
let search = "This is a weird test that is Weird weird this sucks"
// write a program that returns an array of every word that appears more than once in the phrase.
// Your final array should have just one instance of the repeated words.
// So if you were to find a word multiple times, your final array should have it just once.

function returnDupesOnce (str) {
    let checkArray= [];
    let finalArray=[];
    let strArray = str.replace(/[^\w\s]/gi, '').toLowerCase().split(" ");
    strArray.filter((index, position, array) => {
        if(array.indexOf(index) !== position) {
            checkArray.push(index);
        }
    });
    // checkArray.filter((index, position, array) => {
    //     if(array.indexOf(index) === position) {
    //         finalArray.push(index)
    //     }
    // });
    // console.log(checkArray)
     finalArray = checkArray.filter((index, position, array) => {
        return array.indexOf(index) == position
    });

    // return finalArray.sort();
    return finalArray.sort();
};

// console.log(returnDupesOnce(search));

let x = (num) => num * num

console.log(x(3))

const arr = [1, 2, 3, 1, 4, 4, "sam"];
const newArr = arr.filter((index, position, array) => {
    return array.indexOf(index) === position;
    console.log(array.indexOf(index));
})
console.log(newArr)





module.exports = returnDupesOnce;
