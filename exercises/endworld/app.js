

var display = document.getElementById('clock');
display.innerText = "Countdown appears here";
let counter = 1;
let x = 10;
function countDown() {
    display.innerText = x;
    x -= counter
    console.log(x)
    if (x === -1) {
        stop()
    }

}

let timer = setInterval(countDown, 1000);
function stop () {
    clearInterval(timer)
}
