const express = require("express");
const app = express();
const bodyParser = require('body-parser')

let fruits = [
    {
        type: "banana",
        brand: "chiquita",
        price: "0.5"
    },
    {
        type: "apple",
        brand: "gala",
        price: "0.5"
    },
    {
        type: "orange",
        brand: "naval",
        price: "0.75"
    },

]

app.listen(3000, ()=> {
    console.log("Running port 3000")
});


app.get("/fruit", (req, res) => {

    let resp = fruits.filter((fruit,i) => {
        for (key in req.query) {
            if (fruits[i][key] === req.query[key]) {
                console.log(fruits[i][key])
                return fruits[i][key]
            } else {
                return false
            }
        }
    })

    let safety = Object.keys(req.query)
    !safety.length ? resp.push(...fruits) : null
    !resp.length ? resp.push({msg: "that item is not available"}) : null


    res.send(resp)

})
