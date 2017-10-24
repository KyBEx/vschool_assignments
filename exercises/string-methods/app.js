var stringA = "concert";
var stringB = " starts tonight. It will be a good concert";
var string1;
function masterString() {
    string1 = stringA.concat(stringB);
}
masterString();
console.log(string1);

//why does this stuff below work? Index hasn't been defined--why is it
//when you have a variable without var (like below) JS treats it as global in scope
function string2 (x) {
    index = string1.indexOf(x);
}

string2("n");
console.log(index);



function string3(x) {
    var index = string1.indexOf(x);
    var lastIndex = string1.lastIndexOf(x);
    var stringToArray = string1.split(" ");
    console.log(index);
    console.log(lastIndex);
    console.log(stringToArray)
}
string3("c");

function findAll(keyword) {
    var allMatch = string1.match(keyword);
    console.log(allMatch);
};

findAll("concert");

var str = "This is a test. This is a fun test.  I hate to take a test";
var strMatch = str.match('test');
//console.log(strMatch);
var newMatch = str.match(/test/g);
//console.log(newMatch);
var newString = str;
function replaceWords (x, y) {
    for (var i = 0; i < newString.length; i++) {
        if (newString.slice(i, i+4) === "test") {
            newString = newString.replace(x,y);
        }

    };
   console.log(str);
   console.log(newString);
};

//replaceWords("test", "exam");

function changeCase () {
    console.log(str.toUpperCase());
    console.log(str.toLowerCase());
    //var newString = str.substr(16, 19);
    var newString = str.split(". ");
    console.log(newString[1]);
};

//changeCase();
