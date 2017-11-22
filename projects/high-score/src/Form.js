import React from "react"
import Button from "./Button"
export default function Form (props) {

    const style = {
        input: {
            display: "block",
            height: "50px",
            width: "100%",
            marginBottom: "10px",
            fontFamily: "Lato",
            backgroundColor: "rgba(224, 224, 224, .3)",
            borderColor: "rgba(234, 234, 234, .2)",
            fontSize: "15px",
            padding: "0px",
            borderWidth: "0px"


        },
        input2: {
            display: "block",
            height: "50px",
            width: "100%",
            marginBottom:"10px",
            fontFamily: "Lato",
            backgroundColor: "rgba(224, 224, 224, .3)",
            borderColor: "rgba(234, 234, 234, .2)",
            placeholderColor: "blue",
            fontSize: "15px",
            padding: "0px",
            borderWidth: "0px"


        },


        checkbox: {
            visibility: "hidden"
        },

        label: {
            font: "bold 11px Arial",
            color: "#333333",
            textAlign: "center",
            width: "100%",
            verticalAlign: "middle",
            lineHeight: "50px",
            height: "50px",
            display: "block",
            fontFamily: "monospace",
            backgroundColor: "#95a59a",
            fontSize: "15px"


        },

        fieldset: {
            display: "inline-block",
            border: "none",
            width: "1000px"
        },

        // fontFace: {
        //     fontFamily: "Lato",
        //     src: `url{https://fonts.google.com/specimen/Lato}`
        // },

        h1: {
            display: "inline-block",
            width: "100%",
            fontSize: "30px",
            textAlign: "center",
            verticalAlign: "middle",
            lineHeight:"60px",
            // border: "1px solid black",
            height: "60px",
            backgroundColor: "rgba(125,205,133, .3)",
            color: "white",
            fontFamily: "monospace"

        }
    }


    return (
        <fieldset style={style.fieldset}>
        <h1 style={style.h1}>Gaming Accomplishments</h1>
        <form>
            <input className = "input3" style ={style.input} type="text" placeholder="Enter name here" ></input>
            <input style ={style.input} type="text" placeholder="What game were you playing?"></input>
            <input style ={style.input2} onFocus={(e) => {
                e.target.type = "date"}}
                placeholder="When were you playing it?">
                </input>
            <input style ={style.input} onFocus={(e) => {
                e.target.type = "number"}}
                placeholder="Enter your score">
                </input>
            <label style={style.label}>Click here to enter smack talk<input id="check" style={style.checkbox} type="checkbox"></input></label>
            <Button/>
        </form>
        </fieldset>
    )
}

// ^^^research using a date picker? or some kind of date input for 3rd input
