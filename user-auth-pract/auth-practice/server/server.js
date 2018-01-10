const express = require("express");
const server = express();

const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
// const cors = require("cors");
const PORT = process.env.PORT || 5500;

server.use(morgan("dev"));
server.use(bodyParser.json());
// app.us(cors());

mongoose.connect("mongodb://localhost/auth-practice");

// routes

server.listen(PORT, ()=> {
    console.log(`Server is listening to ${PORT}`)
})
