const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/todos');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    type: String,
    instructions: {
        step1: String,
        step2: String,
        step3: String,
    }
})

const Todo = mongoose.model('Todo', todoSchema);

const todo1 = new Todo({
    type: "dishes",
    instructions: {
        step1: "clean sink",
        step2: "wash dishes",
        step3: "dry dishes",
    }
})

const todo2 = new Todo({
    type: "clean room",
    instructions: {
        step1: "change sheets",
        step2: "pick up clothes",
        step3: "dust furniture"
    }
})

// todo1.save((err, todos) => {
//     console.log(todos)
// });

todo2.save((err, todos)=> {
    console.log(todos)
})

Todo.find({type:"dishes"}, (err, new_todo) => {
    console.log(new_todo)
})
