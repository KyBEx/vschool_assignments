function printString (string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

//printString("testing")

function findChar (string, char) {
  for (var i = 0; i < string.length; i++) {
    if(string.indexOf(char) !== -1) {
      console.log(char);
    } else {
      console.log("That character is not in the string");
      return;
    }
  };
}

//findChar("this is a test", "z")

function searchArray(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 42) {
      console.log("You found 42");
      return;
    } 
  };
   console.log("You didn't find 42");
  
}
var x = [1,2,3,4,42,5,6,7,8,9,11,12,13,14]
//searchArray(x);

var tenArray = [1,2,2,3,4,5,6,7,7,10];
function returnSmallest (array) {
  for (var i = 0; i < array.length; i++)
      if (tenArray[i] <= tenArray[0] && tenArray[i] <= tenArray[1] && tenArray[i] <= tenArray[2] && tenArray[i] <= tenArray[3] && tenArray[i] <= tenArray[4] && tenArray[i] <= tenArray[5] && tenArray[i] <= tenArray[6] && tenArray[i] <= tenArray[7] && tenArray[i] <= tenArray[8] && tenArray[i] <= tenArray[9]){
        console.log(tenArray[i]);
              
            }
          }

var arr = [10,1,9,5,7];
var smallest = arr[0];

for(var i=0; i<arr.length; i++){
    if(arr[i] < smallest){
        smallest = arr[i];   

    } 
};

console.log(smallest);