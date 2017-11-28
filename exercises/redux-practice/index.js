const redux = require("redux");


function reducer(prevState = 0, action) {
    // can use a default parameter; prevState = another variable, or a hard coded number
    // basically, with this notation in a parameter argument, it is an OR--if you don't understand what prevState is,
    // use the right hand side
    // take an action and update the state
    // reducer needs to be a pure function
    // what the reducer returns is the new state
    switch(action.type) {
        case "INCREMENT":
            return prevState +1;
        case "DECREMENT":
            return prevState -1;
        case "DECREASE_BY":
            return prevState - action.amount;
        case "INCREASE_BY":
            return prevState + action.amount;
        default:
            return prevState;
    // must add a default case--if this reducer doesn't know what to do, we want it to return prevState
    // the return is stored beyond the scenes in redux
    }
}

const store = redux.createStore(reducer)
// When you create a store, you have to give it a reducer; we will call ours 'reducer'
// the reducer is a function

store.subscribe(function() {
    // anytime something changes in the store, run this function
    // this is solely for our ability
    const currState = store.getState()
    console.log(currState);
})


// action creator; typically has the same name as the action in the reducer, but lowercase
// returns an object
function increment() {

    return {
        type: "INCREMENT"
    }
}

function decrement() {

    return {
        type: "DECREMENT"
    }
}

function decreaseBy(amount) {
    return {
        type: "DECREASE_BY",
        amount
    }
}

function increaseBy(amount) {
    return {
        type: "INCREASE_BY",
        amount
    }
}
// dispatch time!!
// dispatch takes the action object and passes it to the reducer
// pass it the objects in your action creatior section
// store.dispatch(decreaseBy(5))
// store.dispatch(decreaseBy(5))
// store.dispatch(decreaseBy(5))
// store.dispatch(increaseBy(3))
// store.dispatch(increaseBy(3))
store.dispatch(increment())
