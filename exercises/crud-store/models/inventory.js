const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema ({
    item: {
        type: String,
        required: true,
    },
    cost: Number,
    description: String,
    department: {
        type: String,
        required: true,
    }

})

module.exports = mongoose.model("Inventory", inventorySchema)
