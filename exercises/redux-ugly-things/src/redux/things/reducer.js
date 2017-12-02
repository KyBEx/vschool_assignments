
// this is our reducer

export function addItem(uglyInputs){
    return {
        type: "ADD_ITEM",
        uglyInputs
    }
}


export default function reducer(prevState = [],action) {

    switch(action.type){
        case "ADD_ITEM":
            
            return [...prevState,action.uglyInputs]
        default:
            return prevState;

    }
}
