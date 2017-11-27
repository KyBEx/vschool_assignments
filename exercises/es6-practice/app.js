function collectAnimals (...animals) {
    const arr = animals;
    return arr
}
// console.log(collectAnimals("dog", "cat", "bear", "sheep"));

const fruit = ["apple", "pear"];
const sweets = ["cake", "pie"];
const vegetables = ["carrot"];

const food = {fruit, sweets, vegetables};
// ^^Object Literals way
const food2 = {fruit: fruit, sweets: sweets, vegetables: vegetables}
// console.log(food);
// console.log(food2);


const vacation = {
  location: "Burly Idaho",
  duration: "2 weeks"
};

const {location, duration} = vacation;

// console.log(`We're going to have a good time in ${location} for ${duration}`)
const items = ["socks", "mittens"]
const firstItem = items[0];
// console.log(firstItem)
// const [first, secondItem]= items
// console.log(secondItem);

const favoriteActivitiesInOrder = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const [firstFav, secondFav, thirdFav] = favoriteActivitiesInOrder
// console.log(`My top three favorite activites are ${firstFav}, ${secondFav}, and ${thirdFav}`)
// console.log("My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav");

function combineAnimals(...arrs) {
    const combo = arrs;
    return arrs
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(...realAnimals,...magicalAnimals, ...mysteriousAnimals));
function product(...args) {
  var numbers = args;
  return numbers.reduce((acc, number) => acc * number, 1)
}

// console.log(product(1, 2, 3, 4))
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}



function unshift2(array, ...args) {
  return [...args, ...array]
}

// console.log(unshift([1,2], 2, 3, 3, 3, 3))
// console.log(unshift2([1,2], 2, 3, 3, 3, 3))

function populatePeople(names){
    return names.map(name => {
        const names = name.split(" ");
        const [firstName, lastName] = names
        return {
            firstName,
            lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
