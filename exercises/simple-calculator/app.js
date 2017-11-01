
document.getElementById('add').addEventListener("click", function() {
    // document.getElementById('result').innerText = document.getElementById('first').valueAsNumber + document.getElementById('second').valueAsNumber;
    var sum = document.getElementById('first').valueAsNumber + document.getElementById('second').valueAsNumber;
    document.getElementById('result').innerText = sum;
});

document.getElementById('subtract').addEventListener("click", function() {
    var difference = document.getElementById('first').valueAsNumber - document.getElementById('second').valueAsNumber;
    document.getElementById('result').innerText = difference;
});

document.getElementById('multiply').addEventListener("click", function() {
    var product = document.getElementById('first').valueAsNumber * document.getElementById('second').valueAsNumber;
    document.getElementById('result').innerText = product;
});

document.getElementById('divide').addEventListener("click", function() {
    var dividend = document.getElementById('first').valueAsNumber / document.getElementById('second').valueAsNumber;
    document.getElementById('result').innerText = dividend;
});
