import React from "react";

function Box (props) {
    const style = {
        height: "200px",
        width: "200px",
        backgroundColor: props.color,
        display: "inline-block",
        marginRight: "20px"
    }
    return (
        <div style={style}></div>
    )
}


export default Box;
