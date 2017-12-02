import React from "react";

const styles = {
    textAlign: "center",
    background: "linear-gradient(to right, #191654, #43C6AC)",
    height: "50px",
    verticalAlign: "middle",
    lineHeight: "50px",
    color: "whitesmoke"

}

export default function Header (props) {

    return (
        <header style = {styles}>
            <h1>Contacts</h1>
        </header>
    )
}
