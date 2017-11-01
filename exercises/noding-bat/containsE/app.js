var stringE=function(str){
  	var counter = 0;
  	var containsE;
	for (var i = 0; i < str.length; i++) {
      if (str[i] === "e") {
        counter++;
        console.log(counter);
      }
    }
  // if (counter > 1 && counter < 3) {
  //   containsE === true;
  // }
  //
  // return containsE;
}

// console.log(stringE("Hello"));

var htmlReady = [];
function readyToPutInDom(arr) {

    arr.map(function(n) {
        htmlReady.push("<h1>"+n.name+'</h1>'+"<h2>"+n.age+"</h2>");
    })
}

var names = [
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
]

readyToPutInDom(names);
console.log(htmlReady);
