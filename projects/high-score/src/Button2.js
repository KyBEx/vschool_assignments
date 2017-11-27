import React from "react"

export default function Button2 (props) {
    const style = {
        marginTop: "10px",
        width: "100%",
        height: "50px",
        fontFamily: "Lato",
        fontSize: "15px",
        marginLeft: "auto",
        marginRight: "auto"
    }

    // let showHide = null;
    // if (props.value.display === "hidden") {
    // showHide = <button style={style} onClick = {props.show}>{props.value.button2}</button>
    //     } else {
    //         showHide = <button style={style} onClick = {props.hide}>{props.value.button2}</button>
    //     }
     
    return (
        <button style={style} onClick = {props.show}>{props.value.button2}</button>
    )
}
