const redux = require("redux");

// reducer

function contactManager(prevState = [], action) {
    switch (action.type) {
        case "NEW_CONTACT":
        return [...prevState, action];
        case "REMOVE_CONTACT":
            return prevState.filter(item => item.name !== action.name)

        default:
            return prevState;
    }
}

// create the store

const store = redux.createStore(contactManager);

// action creator

function newContact (name, email, phone) {
    return {
        type: "NEW_CONTACT",
        name,
        email,
        phone
    }
}

function removeContact (name) {

    return {
        type: "REMOVE_CONTACT",
        name
    }
}

function test () {
    return {
        type: "TEST"
    }
}

store.subscribe(function() {
    const currState = store.getState();
    console.log(currState);
    console.log(" ")
})

store.dispatch(newContact("Kyle",  "hutch@hutch", "655"));
store.dispatch(newContact("Bob", "bob@bob", "755"));

store.dispatch(removeContact("Bob"))
