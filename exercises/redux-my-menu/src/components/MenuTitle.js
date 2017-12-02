import React from "react";

const style = {
    textAlign: "center",
    height: "60px",
    background: "linear-gradient(to right, #6f0000, #200122)",/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    lineHeight: "60px",
    color: "whitesmoke"
}
export default function MenuTitle(props) {

    return (
        <header style={style}>
            <h1>Menu builder</h1>
        </header>
    )
}
