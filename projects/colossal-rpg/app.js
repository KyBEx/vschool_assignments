const readline = require('readline-sync');
let hitPoints = 15;
let startJourney = false;
let inventory = ["hunk of junk", "health potion"];
let interactInventory = () => {
        let choice = readline.keyInSelect(inventory, "Which item would you like to select?")
        switch (inventory[choice]) {
            case "health potion" :
                console.log("You gain 10 health");
                hitPoints += 10;
                inventory.splice(inventory.indexOf("health potion"), 1)
                break;
            case "power up":
                console.log("Your attacks do more damage!");
                damageModify +=2;
                inventory.splice(inventory.indexOf("power up"), 1)
                break;
            default:
                console.log("That item is useless");
                break;
            };

    };
const monsters = [];
let walkCount = 0;
// function Monster (name, hitpoints, item, dmgDice, toHit) {
//     this.type = name;
//     this.hp = hitpoints;
//     this.item = item;
//     this.damage = dmgDice;
//     this.toHit = toHit;
// }
class Monster {
    constructor(name, hitpoints, item, dmgDice, toHit) {
        this.type = name;
        this.hp = hitpoints;
        this.item= item;
        this.damage = dmgDice;
        this.toHit = toHit;
    }
};
let monster1 = new Monster("kobold", "5", "worthless gemstone", "4", "17")
monsters.push(monster1, monster1, monster1, monster1, monster1);
let monster2 = new Monster("gibberling", "10", "rusty shield", "5", "18")
monsters.push(monster2, monster2, monster2, monster2);
let monster3 = new Monster("orc", "20", "health potion", "6", "20");
monsters.push(monster3, monster3, monster3, monster3);
let monster4 = new Monster("ogre", "30", "power up", "10", "25")
monsters.push(monster4, monster4);

let attackPower = 8;
let charToHit =  () => Math.floor((Math.random()*20)+1);
let charDamage = () => Math.floor((Math.random()*attackPower)+1);
let attackChance = () => Math.floor((Math.random()*3) +1);
// let monsterToHit = () => Math.floor((Math.random()*20)+1);
// let enemyToDamage = () => Math.floor(Math.random()*roundMonster.damage+1);
let flee = () => Math.floor((Math.random()*2)+1);

let combatTime = () => {
    let roundMonster = monsters[(Math.floor(Math.random()*monsters.length))];
    let monsterHP = roundMonster.hp;
    let monsterToHit = () => Math.floor((Math.random()*roundMonster.toHit)+1);
    let enemyToDamage = () => Math.floor(Math.random()*roundMonster.damage+1);
    console.log(`----A ${roundMonster.type} is attacking you!----`)
    while (monsterHP > 0) {
        let charHit = charToHit();
        let roundDamage = charDamage();
        let monstHit = monsterToHit();
        let monstDamage = enemyToDamage();
        if(charHit > 10) {
            console.log("You hit the foul creature");
            console.log(`You did ${roundDamage} damage`);
            monsterHP = monsterHP - roundDamage;
            console.log(`${roundMonster.type} has ${monsterHP} health left`)
            if(monsterHP < 1) {
                console.log("You have defeated the beast!");
                inventory.push(roundMonster.item);
                console.log(`${roundMonster.item} was added to your inventory!`)
                console.log(`You gained ${Math.floor(roundMonster.hp/4)} health!`)
                hitPoints += Math.floor(roundMonster.hp/4)
                walkCount++;
                break;
            }
        } else {
            console.log("You missed!")
        }
        if(monstHit > 15) {
            console.log(`You are struck for ${monstDamage} damage!`);
            hitPoints = hitPoints - monstDamage;
            console.log(`You have ${hitPoints} health left`)
            if(hitPoints < 1) {
                console.log("You are defeated! You words are forgotten, your deeds are forgotten, your bones decay into dust");
                break;
            }
        } else {
            console.log(`The ${roundMonster.type} misses you!`)
        }
        let combatRoundActions = readline.keyIn("What will you do? Hit 'a' to continue attacking, hit 'i' to access inventory, hit 'r' to run away  ", {limit: 'ari'});
        if (combatRoundActions === 'a') {
            console.log("----You continue your attack----");
        } else if (combatRoundActions ==="i") {
            interactInventory();
            console.log("----The attack continues----")
        } else {
            let escapeChance = flee();
            if (escapeChance === 2) {
                console.log("----You successfully escaped!----");
                walkCount++;
                break;
            } else {
                    console.log(`----You fail in your attempt to flee. The ${roundMonster.type} attacks first!----`)
                    while (monsterHP > 0) {
                        let charHit = charToHit();
                        let roundDamage = charDamage();
                        let monstHit = monsterToHit();
                        let monstDamage = enemyToDamage();
                        if(monstHit > 15) {
                            console.log(`You are struck for ${monstDamage} damage!`);
                            hitPoints = hitPoints - monstDamage;
                            console.log(`You have ${hitPoints} health left`);
                            if(hitPoints < 1) {
                                console.log("You are defeated! You words are forgotten, your deeds are forgotten, your bones decay into dust");
                                return;
                            }
                        } else {
                        console.log(`The ${roundMonster.type} misses you!`)
                    }
                        if(charHit > 10) {
                            console.log("You hit the foul creature");
                            console.log(`You did ${roundDamage} damage`);
                            monsterHP = monsterHP - roundDamage;
                            console.log(`Monster has ${monsterHP} health left`);
                            if(monsterHP < 1) {
                                console.log("You have defeated the beast!");
                                inventory.push(roundMonster.item);
                                console.log(`${roundMonster.item} was added to your inventory!`);
                                console.log(`You gained ${Math.floor(roundMonster.hp/4)} health!`);
                                hitPoints += Math.floor(roundMonster.hp/4);
                                walkCount++;
                                break;
                            }
                        } else {
                        console.log("You missed!")
                        }
                    let combatRoundActions = readline.keyIn("What will you do? Hit 'a' to continue attacking, hit 'i' to access your inventory  ", {limit: 'ai'});
                    if (combatRoundActions === "a") {
                        console.log("----The attack continues----");
                    } else if (combatRoundActions ==="i") {
                        interactInventory();
                        console.log("----The attack continues----");
                    }
                }
            }
        }
    };
};

let fleeCombatTime = () => {
    let roundMonster = monsters[(Math.floor(Math.random()*monsters.length))];
    let monsterHP = roundMonster.hp;
    let monsterToHit = () => Math.floor((Math.random()*roundMonster.toHit)+1);
    let enemyToDamage = () => Math.floor(Math.random()*roundMonster.damage+1);
    console.log(`----You fail in your attempt to flee. A ${roundMonster.type} is attacking you and attacks first!----`)
    while (monsterHP > 0) {
        let charHit = charToHit();
        let roundDamage = charDamage();
        let monstHit = monsterToHit();
        let monstDamage = enemyToDamage();
        if(monstHit > 15) {
            console.log(`You are struck for ${monstDamage} damage!`);
            hitPoints = hitPoints - monstDamage;
            console.log(`You have ${hitPoints} health left`)
            if(hitPoints < 1) {
                console.log("You are defeated! You words are forgotten, your deeds are forgotten, your bones decay into dust");
                break;
            }
        } else {
            console.log(`The ${roundMonster.type} misses you!`)
        }
        if(charHit > 10) {
            console.log("You hit the foul creature");
            console.log(`You did ${roundDamage} damage`);
            monsterHP = monsterHP - roundDamage;
            console.log(`Monster has ${monsterHP} health left`);
            if(monsterHP < 1) {
                console.log("You have defeated the beast!");
                console.log(`${roundMonster.item} was added to your inventory!`)
                inventory.push(roundMonster.item);
                console.log(`You gained ${Math.floor(roundMonster.hp/4)} health!`)
                hitPoints += Math.floor(roundMonster.hp/4)
                walkCount++;
                break;
            }
        } else {
            console.log("You missed!")
        }
        let combatRoundActions = readline.keyIn("----What will you do? Hit 'a' to continue attacking, hit 'i' to access your inventory----  ", {limit: 'ai'});
        if (combatRoundActions === "a") {
            console.log("----The attack continues----");
        } else if (combatRoundActions ==="i") {
            let choice = readline.keyInSelect(inventory, "Which item would you like to select?")
            switch (inventory[choice]) {
                case "health potion" :
                    console.log("You gain 10 health");
                    hitPoints += 10;
                    break;
                case "power up":
                    console.log("Your attacks do more damage!");
                    damageModify +=2;
                    break;
                default:
                    console.log("That item is useless");
                    break;
                };
                console.log("----The attack continues----")
        }
    };
};


console.log("----Welcome, adventurer! You are about to embark on a great journey!----")
const userName = readline.question("What is your name, adventurer?  ")
console.log(`${userName}, I hear there is treasure buried in the ruins of the old keep.  But beware, many have sought it out and have never returned!`);
while (startJourney === false) {
    if (readline.keyInYN('Are you ready to begin your journey?')) {
  console.log('----You depart the inn, the night\'s cold wind howling in your ears----');
  startJourney = true;
} else {
  console.log('What kind of adventurer are you? Gather your courage! You can\'t stay here forever');

    }
};

// randomize: loop through array and have the monster object = object[Math.random() * array.length +1]; to 'weight' your monster choices, just include more in the object-array
// Check against the attackChance, if pass fails, execute combat function, otherwise, keep moving; maybe have an option to move or check your inventory (make a decision at each step)
while (hitPoints > 0 && walkCount < 15) {
    // const options = ["Head towards the old keep", "Check your inventory"];
    let walkCommand = readline.keyIn("----Hit 'w' to head toward the keep, hit 'i' to review your inventory, or hit 'p' to review your health and inventory  ", {limit: ['w', 'i', 'p']})
    if (walkCommand === 'w') {
        // let combatChoice = ["Attack!", "Try and flee!"]
        let amAttacked = attackChance();
        if (amAttacked === 1) {
            let combatRoundStart = readline.keyIn("----You are attacked by a creature of the night! What will you do? Hit 'a' to attack or 'r' to try and flee!  ", {limit: 'ar'});

            if (combatRoundStart === "a") {
                combatTime();
                } else if (combatRoundStart === "r") {
                    let escapeChance = flee();
                    if (escapeChance === 2) {
                        console.log("You successfully escaped!");
                    } else {
                        fleeCombatTime();
                    }
                    }
                } else {
                    console.log("----You make progress on your journey to the keep----")
                    walkCount++;
                    console.log(walkCount);
                }
            } else if (walkCommand ==="i") {
                interactInventory();
                } else if (walkCommand ==="p") {
                    console.log(`Name: ${userName}; Current Health: ${hitPoints}; Items: ${inventory} AttackPower: ${attackPower}`);

                }
        };
        if (hitPoints > 0) {
            console.log("----You reach the keep and find the hidden treasure! You return to town victorious, and RICH!!!----");
        }
