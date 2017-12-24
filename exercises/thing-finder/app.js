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
        type: "banana",
        brand: "dole",
        price: "0.7"
    },
    {
        type: "apple",
        brand: "chiquita",
        price: "0.5"
    }


]

app.listen(3500, ()=> {
    console.log("Running port 3500")
});


app.get("/fruit", (req, res) => {
    console.log(req.query)

    let resp = fruits.filter((fruit,i) => {
        let match = true
        for (key in req.query) {
            if (fruits[i][key] !== req.query[key]) {
                return false
            }
        }
        return match
    })

    let searchParams = Object.keys(req.query)
    !searchParams.length ? resp.push(...fruits) : null
    resp.length ? null : resp.push({msg: "that item or search parameter is not available"})


    res.send(resp)

})
