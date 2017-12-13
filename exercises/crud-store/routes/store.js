const express = require("express");
const storeRouter = express.Router();
const Inventory = require("../models/inventory.js")

storeRouter.route("/")
    .get((req, res) => {
        Inventory.find((err, items) => {
            if (err) return res.status(500).send(err);
            res.send(items)
        });

    })
    .post((req,res) => {
        let newItem = new Inventory(req.body);
        newItem.save((err, item) => {
            if (err) return res.status(500).send(err);
            res.status(201).send(item)
        })
    })

storeRouter.route("/:id")
    .get((req,res) => {
        Inventory.findById(req.params.id, (err, item) => {
            if (err) return res.status(500).send(err);
            res.send(item);
        })
    })
    .delete((req,res) => {
        Inventory.findByIdAndRemove(req.params.id, (err, deletedItem) => {
            if (err) return res.status(500).send(err);
            res.send({message: "Successfully removed item from inventory", item: deletedItem})
        })
    })
    .put((req,res) => {
        Inventory.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updated) => {
            if (err) return res.status(500).send(err);
            res.send(updated)
        })
    })




module.exports = storeRouter;
