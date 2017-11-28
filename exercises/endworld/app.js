

var display = document.getElementById('clock');
display.innerText = "Preparing for coundown";
let counter = 1;
let x = 20;
// let date = new Date (null);
// console.log(date);
// date.setSeconds(x)
// let clock = date.toISOString().substr(11,8)
// console.log(clock)

// date.setSeconds(x);
// let clock = date.toISOString().substr(11,8)

function countDown() {

    let date = new Date (null);
    date.setSeconds(x);
    let clock = date.toISOString().substr(11,8)
    display.innerText = clock;

    x -= counter;

    if (x === -1) {
        stop();
        document.getElementById('endworld').play();
        document.body.style.backgroundImage = "url('https://www.planetdeadly.com/wp-content/uploads/licorne-nuclear-test.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        display.innerText = "THE WORLD HAS ENDED";
    }

}

function stop () {
    clearInterval(timer)
}

let timer = setInterval(countDown, 1000);
