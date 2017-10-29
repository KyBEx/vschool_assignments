// var display = document.getElementById('clock');
// display.innerText = "Countdown appears here";


setInterval(function() {
    var x = document.getElementById('clock');
    x.innerText = 10;
    x.innerText--;
    console.log(x.innerText);
}, 1000)
