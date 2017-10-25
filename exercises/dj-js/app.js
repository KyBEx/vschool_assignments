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
});

blueBox.onmouseup = function() {
    blueBox.style.backgroundColor = "yellow";
};

blueBox.ondblclick = function() {
    blueBox.style.backgroundColor = "green";
};

window.addEventListener("wheel", function() {
    blueBox.style.backgroundColor = "orange";
});

document.addEventListener("keydown", function(key) {
    if (key.which === 82) {
        blueBox.style.backgroundColor = "red";
    } else if (key.which === 66) {
        blueBox.style.backgroundColor = "blue";
    } else if (key.which === 79) {
        blueBox.style.backgroundColor = "orange";
    } else if (key.which === 71) {
        blueBox.style.backgroundColor = "green";
    } else if (key.which === 89) {
        blueBox.style.backgroundColor = "yellow";
    }
});
