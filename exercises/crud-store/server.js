const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");

const server = express();

mongoose.connect('mongodb://localhost/inventory')

server.use(bodyParser.json());


server.use("/store", require("./routes/store"));







server.listen(port, ()=> {
    console.log(`Server is listening on port ${port}`)
})
