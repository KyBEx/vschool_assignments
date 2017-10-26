var ask = require('readline-sync');

var userName = ask.question('Computer says: Hello!  I hope you are having a pleasant day.  What is your name? ');
// console.log("Computer says: It's a pleasure to meet you, " + userName.toUpperCase());
// var job = ask.question('Computer says: What do you do for work, ' + userName + "? Do you enjoy it?");
// console.log("Computer says: That sounds exciting! I'm a computer, so let me give you some information about what you just typed.  The text you just wrote is " + job.length + " characters long!");
// var age = ask.question("Computer says: I would like to get to know you better. How old are you?")
// console.log("Computer says: Great! Here's what I know about you. Your name is " + userName.toUpperCase() + " and you are " + age.toLowerCase() + " years old!");
var dreamHome = ask.question("Computer says: " +userName+ " , if you had to choose, what would be your dream home.  Please be as descriptive as possible! ");
if (dreamHome.length%2 === 0 && dreamHome.length > 20) {
    var halfHome = dreamHome.slice((dreamHome.length/2));
    console.log("Computer says: Wow, that's pretty cool!  That was really descriptive!  Here's the last half of what you wrote: " + halfHome);
} else if (dreamHome.length%2 !== 0 && dreamHome.length > 20) {
    var halfHome = dreamHome.slice((dreamHome.length/2)+1);
    console.log("Computer says: Wow, that's pretty cool!  That was really descriptive!  Here's the last half of what you wrote: " + halfHome);

} else {
    console.log("Computer says: Here is what you wrote: " + dreamHome);
};
//var userIndexChoice = ask.question("Computer says: I want to manipulate what you just said. Give me a number, and I will return your Dream Home statement from that point");
//var returnedDreamHome = dreamHome.slice(userIndexChoice);
var userIndexChoice2 = ask.question("I'm going to repeat back your answer. Tell me where to start");
var returnedDreamHome2 = dreamHome.substr(dreamHome.indexOf(userIndexChoice2));
console.log(returnedDreamHome2);
