import React from "react";

function List (props) {


    return (
        <div>
        <li>{props.name}</li>
        <button onClick={props.remove}>Delete</button>
        </div>
    )


}


export default List
