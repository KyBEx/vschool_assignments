var readline = require("readline-sync");
var choices = ["Put your hand in the hole", "Search the room", "Try and open the door"];
var choice = "nothing"
var isLocked = true;
var hasKey = false;
var isDead = false;

console.log("You awaken in a dimly lit room. You have no recollection of how you came to be here.  There is a door on the other side of the room.");
while (isLocked === true && isDead === false) {
    choice = readline.keyInSelect(choices, "What do you do?: ");
    switch(choice) {
        case 0:
            console.log("You feel an icy grip seize your arm. You die an agonizing, slow death");
            isDead = true;
            break;
        case 1:
            console.log("You search the room.  After what feels like hours, you find what appears to be a key! What will you do now?");
            hasKey = true;
            break;
        case 2:
            if (hasKey === true) {
                console.log("The key fits!!! You escape the room!");
                isLocked = false;
            } else {
                console.log("You attempt to open the door, but it is locked.  You will have to do something else");
            }
            break;
        default:
            console.log("You have to do something ...");
            break;
    };
};
