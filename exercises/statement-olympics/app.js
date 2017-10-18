//prelims
(5 > 3) ? console.log("is greater than") : null;
if ("cat".length === 3) {
    console.log("is the length");
}
"cat" === "dog" ? console.log("same") : console.log("not same");
//bronze
var person = {
    name: "Bobby",
    age: 12
};
if (person.age > 18) {
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is not allowed to go to the movie");
};

if (person.name[0] === "B") {
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is not allowed to go to the movie");
};

if (person.name[0] === "B" && person.age > 18) {
    console.log(person.name + " is allowed to go to the movie");
} else {
    console.log(person.name + " is not allowed to go to the movie");
};
//Silver
if (1 === 1) {
    console.log("Strict");
} else if (1 == "1") {
    console.log("Abstract");
} else {
    console.log("not equal at all");
}
if (1 <= 2 && !(2 === 4)) {
    console.log ("yes");
}
//Gold
var myString = 1;
if (typeof myString ==='string') {
    console.log("Is string");
} else {
    console.log ("not string");
}

var myBoo =  1;
if (typeof myBoo === "boolean") {
    console.log("It's a boo");
} else {
    console.log("it's not a boo");
}
var myDefine;
if (typeof myDefine !== "undefined") {
    console.log("Defined");
} else {
    console.log("Undefined");
}
//always conversts to false--javascript converts string to number, empty string === 0; otherwise, the string = NaN, which always is false
if (1 > "a") {
    console.log("Greater");
} else {
    console.log("Lesser");
}

var myNums = 10;

switch (myNums) {
    case 1 :
     console.log("one");
     break;
    case 2 : console.log("two");
      break;
    case 3 : console.log("three");
      break;
    case 4 : console.log("four");
      break;
    case 5 : console.log("five");
      break;
    case 6 : console.log("six");
      break;
    case 7 : console.log("seven");
      break;
    case 8 : console.log("eight");
      break;
    case 9 : console.log("nine");
      break;
    case 10 : console.log("ten");
      break;
      default:
      break;
}
