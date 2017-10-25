// document.getElementsByClassName("box").onmouseover = function() {
//     document.getElementsByClassName("box").style.backgroundColor = "blue";
// };

// var blueBox = document.getElementById("box");
// blueBox.onmouseover = function() {
//     blueBox.style.backgroundColor = "blue";
// };

// var boxes = document.getElementsByClassName('box');
// boxes.onmouseover = function() {
//     for (var i = 0; i < boxes.length; i++) {
//         boxes[0].style.backgroundColor = "blue";
//     }
//
// };

var boxes = document.getElementsByClassName('box');
console.log(boxes);
// function changeBoxes() {
//     for (var i = 0; i < boxes.length; i++) {
//     boxes[i].style.backgroundColor = "blue";
//    }
// }
//changeBoxes();
// var color1 = Math.floor(Math.random() * 256);
// var color2 = Math.floor(Math.random() * 256);
// var color3 = Math.floor(Math.random() * 256);

//     for (var i = 0; i < boxes.length; i++) {
//         boxes[i].addEventListener("mouseover", function () {
//         this.style.backgroundColor = "rgb(" + color1 + ", " + color2 +" , " + color3 + ")";
//     });
// };


// for (var i = 0; i < boxes.length; i++) {
//     var colorX;
//     var colorY;
//     var colorZ;
//     boxes[i].addEventListener("mouseover", function () {
//         for (var j = 0; j < boxes.length; j++) {
//             colorX = Math.floor(Math.random() * 256);
//             colorY = Math.floor(Math.random() * 256);
//             colorZ = Math.floor(Math.random() * 256);
//         };
//         this.style.backgroundColor = "rgb(" + colorX + ", " + colorY +" , " + colorZ + ")";
//     });
//
// };

for (var i = 0; i < boxes.length; i++) {
    var colorX;
    var colorY;
    var colorZ;
    boxes[i].addEventListener("mouseover", function () {
        colorX = Math.floor(Math.random() * 256);
        colorY = Math.floor(Math.random() * 256);
        colorZ = Math.floor(Math.random() * 256);
        this.style.backgroundColor = "rgb(" + colorX + ", " + colorY +" , " + colorZ + ")";
        this.style.boxShadow = "8px 8px 10px white"
    });

};
