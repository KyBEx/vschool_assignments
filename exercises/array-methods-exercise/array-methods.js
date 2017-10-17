var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
vegetables.pop();
console.log("vegetables: ", vegetables);
console.log("fruit: ", fruit);
fruit.shift();
console.log("fruit: ", fruit);
console.log(fruit.indexOf("orange"));
// index of orange = 1, as you have sliced off one item from the original fruit array
console.log(vegetables.length);
// length of veggies should equal 3
vegetables.push(3);
console.log("veggies: " + vegetables);
//^should add the number 3 to end of veggies array
var food = fruit.concat(vegetables);
console.log("food: " + food);
console.log(food);
// next line should remove 2 elements from array starting at index 4
food.splice(4, 2);
console.log(food);
food.reverse();
console.log(food);
console.log(food.join(" "));
// var myStudents = [
//     {name: "Kyle",
//      age: 31,
//      isPassing: true,
//      langKnown: ["HTML", "CSS", "Javascript"]
//       },
//     {name: "Andrew",
//      age: 27,
//      isPassing: true,
//      langKnown: ["HTML", "Python", "Ruby"]
//       },
//      {name: "Kayla",
//       age: 23,
//       isPassing: true,
//       langKnown: ["Javascript", "Visual Basic", "C++"]
//        },
//      {name: "Carl",
//       age: 55,
//       isPassing: true,
//       langKnown: ["C", "Python", "Ruby on Rails"]
//       }
//     ];
// console.log(myStudents[0].name, myStudents[0].age);
