//Preliminary
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// };
// for (var i = 9; i >= 0; i--) {
//     console.log(i);
// };
// var fruit = ["banana", "orange", "apple", "kiwi"];
// for (var i = 0; i < fruit.length; i++) {
//     console.log(fruit[i]);
// }

//Bronze
// var emptyArray = [];
// for (var i = 0; i < 10; i++) {
//     emptyArray.push(i);
// }
// console.log(emptyArray)

var emptyArray2 = [];
for (var i = 0; i <= 100; i+=2) {
    emptyArray2.push(i);
};
console.log(emptyArray2);
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
// var newFruit =[];
// for (var i = 0; i < fruit.length; i+=2) {
//     newFruit.push(fruit[i]);
// }
// console.log(newFruit);
// console.log(fruit);

//Silver
var peopleNames = [];
var peopleOccupations = [];
var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Beiber",
    occupation: "Singer"
  },
  {
    name: "Vladmir Putin",
    occupation: "Politition"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
];
// for (var i = 0; i < peopleArray.length; i++) {
//     console.log(peopleArray[i].name);
// }
// for (var i = 0; i < peopleArray.length; i++) {
//     peopleNames.push(peopleArray[i].name);
//     peopleOccupations.push(peopleArray[i].occupation);
// }
// console.log(peopleNames);
// console.log(peopleOccupations);

// var newNames = [];
// var newOcc = [];
// for (var i = 0; i < peopleArray.length; i+=2) {
//     newNames.push(peopleArray[i].name);
//     newOcc.push(peopleArray[i + 1].occupation);
// }
// console.log(newNames);
// console.log(newOcc);

//Gold
var grid1 = [];
var grid2 = [];
var grid3 = [];
var masterGrid = [];
for (var i = 0; i < 3; i++) {
    grid1[i] = 0;
    grid2[i] = 0;
    grid3[i] = 0;
    masterGrid[i] = grid1;
}
// console.log(grid1, grid2, grid3);
// console.log(masterGrid);

var masterGrid2 = [];
for (var i = 0; i < 3; i++) {
    grid1[i] = 0;
    grid2[i] = 1;
    grid3[i] = 2;
    masterGrid2[0] = grid1;
    masterGrid2[1] = grid2;
    masterGrid2[2] = grid3;
}
// console.log(masterGrid2);
var masterGrid3 = [];
for (var i = 0; i < 3; i++) {
    grid1[i] = 0 + i;
    grid2[i] = 0 + i;
    grid3[i] = 0 + i;
    masterGrid3[0] = grid1;
    masterGrid3[1] = grid2;
    masterGrid3[2] = grid3;
}
//console.log(masterGrid3);
