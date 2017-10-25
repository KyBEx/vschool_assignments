// document.getElementById("box").addEventListener('onmouseenter', function() {
//     document.getElementById("box").style.color = "blue";
// });

var blueBox = document.getElementById("box");
blueBox.onmouseover = function() {
    blueBox.style.backgroundColor = "blue";
};
blueBox.onmouseout = function() {
    blueBox.style.backgroundColor = "purple";
};

blueBox.addEventListener("mousedown", function() {
    blueBox.style.backgroundColor = "red";
})

blueBox.mouseup = function() {
    blueBox.style.backgroundColor = "yellow";
}
