import React from "react";

export default function Button (props) {
    const style = {
        marginTop: "10px",
        width: "100%",
        height: "50px",
        fontFamily: "Lato",
        fontSize: "15px"

    }

    return (
        <button style={style}>{props.name}</button>
    )

}
