// here I will write the reducers and actions for the reducers
// this file is pure javascript
//reducer is a function that contains a switch--the switch looks at different attributes of the
// "action" that is sent to it, specifically the type, and executes different code depending on that type
// for right now, let's just add an item
// Action creators are functions that create an object
// the reducer must be exported as default
// the reducer function takes two arguments: the first is state/default state, the second is the action

export default function reducer (prevState = {}, action) {
    switch(action.type) {
        case "ADD_ITEM":
            return { ...prevState, dish: action.dish, price: action.price };
        default:
            return prevState
    }

}


function addItem (item) {
    return {
        type: "ADD_ITEM",
        dish: item.dish,
        price: item.price
    }
}
