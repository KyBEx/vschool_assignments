// var display = document.getElementById('clock');
// display.innerText = "Countdown appears here";
// var x = document.getElementById('clock').innerText;
// console.log(x);
// setInterval(function() {
//     document.getElementById('clock').innerText = 10;
//     var x = document.getElementById('clock').innerText;
//     x--;
//     x= x;
//     console.log(x);
// }, 1000)

function countDown(variable) {
    for (var i = 1; i <= variable; ) {
        console.log(variable--);
    }
}

countDown(6);
