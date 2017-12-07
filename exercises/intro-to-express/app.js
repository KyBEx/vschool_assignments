const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')

app.use(bodyParser.json());

let number = 0
// we can write any number of gets to different paths
// we can dynamically create endpoints by using params

// app.get("/:quote/:person/:etc")

app.get("/search", (req, res)=> {
    console.dir(req.query)
    number = number + Number(req.params.quote);
    return res.send(number.toString())


})
// get--first argument is the url/path

app.listen(port, ()=>{
    console.log(`App is listening on port ${3000}`)
})
