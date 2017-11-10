let textToSearch = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."
let blankArray = [];
let compareArray = textToSearch.replace('/\W/g\.', "").toLowerCase().split(" ").sort();
// console.log(compareArray);
// console.log(blankArray)
// console.log(blankArray.indexOf(1));

// loop through an array
// check to see if each index is equal to any of the others

console.log(compareArray)
