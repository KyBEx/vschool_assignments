// function doubleNumbers(array) {
//     return array.map(function(n) {
//         return n * 2;
//     })
// }
// var toDouble = [5,2,3]
// // console.log(doubleNumbers(toDouble))
//
// function stringItUp(array) {
//     return array.map(function(n) {
//         return n.toString();
//     })
// }

// console.log(stringItUp([1,3,4]))


// function namesOnly(arr) {
//     return arr.map(function(n) {
//         return n.name;
//     })
// }
//
// var names = [
//   {
//     name: "Angelina Jolie",
//     age: 80
//   },
//   {
//     name: "Eric Jones",
//     age: 2
//   },
//   {
//     name: "Paris Hilton",
//     age: 5
//   },
//   {
//     name: "Kayne West",
//     age: 16
//   },
//   {
//     name: "Bob Ziroll",
//     age: 100
//   }
// ];
// console.log(namesOnly(names));

// function namesOnly(arr) {
//     return arr.map(function(n) {
//         if (n.age > 18) {
//             console.log(n.name + " can go to The Matrix")
//         } else {
//             console.log(n.name + " cannot go to The Matrix")
//         }
//     })
// }
// var names = [
//   {
//     name: "Angelina Jolie",
//     age: 80
//   },
//   {
//     name: "Eric Jones",
//     age: 2
//   },
//   {
//     name: "Paris Hilton",
//     age: 5
//   },
//   {
//     name: "Kayne West",
//     age: 16
//   },
//   {
//     name: "Bob Ziroll",
//     age: 100
//   }
// ];
// namesOnly(names);

var names = [
  {
    name: "Angelina Jolie",
    age: 80
  },
  {
    name: "Eric Jones",
    age: 2
  },
  {
    name: "Paris Hilton",
    age: 5
  },
  {
    name: "Kayne West",
    age: 16
  },
  {
    name: "Bob Ziroll",
    age: 100
  }
];

function readyToPutInTheDom(arr) {
    return arr.map(function(n) {
        return "<h1>"+n.name+"</h1>"+"<h2>"+n.age+"</h2>";
    }
)
}

console.log(readyToPutInTheDom(names));
