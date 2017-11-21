var readline = require("readline-sync")

function Location(isShip) {
    this.isShip = false
    this.hit = false;
    this.display = "~";
    this.rando = function () {
        if (isShip === 1) {
            this.isShip = true
        }
    }
    this.displayMod = () => {
        if (this.isShip === true) {
            this.display = "S"
        }
    }
    this.rando();
    this.displayMod();
    };

    var emptyArr = [];
    for (var i = 0; i < 5; i++) {
        emptyArr.push([])
        for (var j = 0; j < 5; j++) {
        emptyArr[i].push(new Location(Math.floor(Math.random() * 5 + 1)))
        }
    }
    // console.log(emptyArr)
const finalArr = emptyArr.map(arr => {
        return arr.map(arr => {
            return arr.display
        })
    })

    console.log(finalArr)

    let counter = 0;

    // while (counter < 4) {
    //     console.log(finalArr);
    //     console.log("Welcome to BattleShip")
    // }
    // idea for creating multi-space ships---create an algorhythm that checks
    // whether an index is a ship; if it is a ship, store the coordinates
    // if the coordinates are adjacent vertically or horizontally, that becomes the ship
    // have to do draw a line in the sand on how ship is defined--if it looks like this
    // 0000SS00
    // 0000S000
    // how do you determine which is the two point ship--horizontal or vertical
