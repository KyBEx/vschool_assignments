
document.getElementById('calculate').addEventListener("click", function() {
    var goomba = Number(document.getElementById('goombatotal').value);
    var bomb = Number(document.getElementById('bomtotal').value);
    var cheep = Number(document.getElementById('cheeptotal').value);
    document.getElementById('total').innerText = (goomba * 5) + (bomb * 8) + (cheep*11);
    console.dir(typeof goomba);
})
