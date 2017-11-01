// var myName = "John Doe";
//
// try {
//     console.log(name);
// } catch(e) {
//     if (e instanceof ReferenceError) {
//         console.log("It's a reference error")
//     } else if (e instanceof TypeError) {
//         console.log("it's a type error")
//     } else (
//         console.log ("not sure")
//     )
// }





function movieCheck(age) {
  if(age < 0) {
    console.log("Error cannot be less than 0") ;
  } else if(age <= 12) {
    console.log("You can see PG movies");
  } else if(age >= 13 && age < 18) {
    console.log("You can see PG-13 movies");
  } else if(age >= 18) {
    console.log("You can see R rated movies");
  }
}
movieCheck(-1);

// try {
//     movieCheck(-1);
// } catch(e) {
//     console.log(e.message);
// }
