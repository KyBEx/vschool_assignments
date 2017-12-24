// have a dynamically changing object
// filter another set of data for those object properties


const myObj = {
    dog: "Sammy",
    numbers: 1
}

const arrayObj = [
    {
        dog: "Sammy",
        numbers: 1
    },
    {
        cat: "Billy",
        numbers: 2
    },
    {
        dog: "Sammy",
        numbers: 1,
        cat: "Billy"
    }
]

// return matches of the query

const filtered = arrayObj.filter(item => {
    for (let key in myObj) {
        if(myObj[key] !== item[key]) {
            return false
        }
    }

    return true
})

console.log(filtered)
