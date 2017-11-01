// function greaterThan5 (array) {
//     return array.filter(function(n){
//         if (n > 5) {
//             return n
//         }
//     })
// }
//
// var check = [1, 5, 4, 3, 9, 12, 33]
//
// // console.log(greaterThan5(check));
//
// function filterOdd (array) {
//     return array.filter(function(n){
//         if (n%2 === 0) {
//             return n
//         }
//     })
// }
//
// // console.log(filterOdd(check));
//
// function filterLength (array) {
//     return array.filter(function(n){
//         if (n.length >= 5) {
//             return n
//         }
//     })
// }
//
// var checkStrings = ["string1", "test", "console"];
//
// // console.log(filterLength(checkStrings));

var club = [
  {
    name: "Angelina Jolie",
    member: true
  },{
    name: "Eric Jones",
    member: false
  },{
    name: "Paris Hilton",
    member: true
  },{
    name: "Kayne West",
    member: false
  },{
    name: "Bob Ziroll",
    member: true
  }
];
// function whoIsClub (array) {
//     return array.filter(function(n){
//         if (n.member === true) {
//             console.log(n.name);
//             return n.name;
//         }
//     })
// }
// whoIsClub(club);

function testing (array) {
    return array.filter(function (n) {
        return !n.member
    })
}
var people =[
  {
    name: "Angelina Jolie",
    age: 80
  },{
    name: "Eric Jones",
    age: 2
  },{
    name: "Paris Hilton",
    age: 5
  },{
    name: "Kayne West",
    age: 16
  },{
    name: "Bob Ziroll",
    age: 100
  }
  ];

function ofAge (array) {
    return array.filter(function (n) {
        if (n.age > 18) {
            console.log(n.name);
        }
    })
}

ofAge(people);

704
