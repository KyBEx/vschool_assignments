const express = require('express');
const app = express();
app.listen(3000, ()=> {
    console.log("App is listening to port 3000")
})

app.get("/:testing", (req, res) => {
    console.dir(req.params)
    res.send(`HelloWorld ${req.params.testing}`)
});

app.get("/about", (req, res) => {
    res.send("This is the about page")
})
