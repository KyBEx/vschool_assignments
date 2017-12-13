const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const uuidv1=require("uuid/v1");
let id = 4
const bounties = [
    {
        fName: "Han",
        lName: "Solo",
        living: true,
        amount: "$5 million",
        type: "Jedi sympathizer",
        id: 1,

    },
    {
        fName: "Luke",
        lName: "Skywalker",
        living: true,
        amount: "$100 million",
        type: "Jedi",
        id: 2,

    },
    {
        fName: "Leia",
        lName: "Organa",
        living: true,
        amount: "$10 million",
        type: "Jedi",
        id: 3,

    },
    {
        fName: "Kylo",
        lName: "Ren",
        living: true,
        amount: "$200 million",
        type: "Sith",
        id: 4,

    },

]


app.use(bodyParser.json());


app.get("/bounties", (req, res) => {
    return res.send(bounties)
})

app.post("/bounties", (req, res) => {
    const newBounty = req.body;
    newBounty.id = id+1;
    id++;
    bounties.push(newBounty);
    return res.send({msg: "The following bounty was added", bounty: newBounty})
})

app.put("/bounties/:id", (req, res) => {
    const index = bounties.findIndex((bounty)=> {
        if (bounty.id === Number(req.params.id)) {
            return true
        }
    })

    for (key in bounties[index]) {
        for (update in req.body) {
            if (key === update) {
                bounties[index][key] = req.body[update]
            }
        }
    }

    return res.send({msg: "You have updated this bounty:", bounty: bounties[index]})
})

app.delete("/bounties/:id", (req, res) => {
    const index = bounties.findIndex((bounty)=> {
        if (bounty.id === Number(req.params.id)) {
            return true
        }
    })

    const removed = bounties.splice(index, 1)

    return res.send({msg: "You have deleted this bounty:", bountyRemoved: removed, bountiesRemaining: bounties})
})


app.listen(port, ()=>{
    console.log(`Listening to ${port}`)
})
