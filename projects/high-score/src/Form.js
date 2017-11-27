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
            backgroundColor: "rgba(224, 224, 224, .7)",
            borderColor: "rgba(234, 234, 234, .2)",
            fontSize: "15px",
            padding: "0px",
            borderWidth: "0px",
            textAlign: "center"


        },

        // checkbox: {
        //     visibility: "hidden"
        // },

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
            width: "1000px",
            margin: "0px",
            padding: "0px"
        },


        h1: {
            display: "inline-block",
            width: "100%",
            fontSize: "30px",
            textAlign: "center",
            verticalAlign: "middle",
            lineHeight:"60px",
            height: "60px",
            backgroundColor: "rgba(125,205,133, .7)",
            color: "white",
            fontFamily: "monospace"

        }
    }


    return (
        <fieldset id ="fieldset" style={style.fieldset}>
        <h1 style={style.h1}>Gaming Accomplishments</h1>
        <form onSubmit = {props.submit}>
            <input onChange={props.add} name="name" style ={style.input} type="text" placeholder="Enter name here"  value={props.value.name}></input>
            <input onChange={props.add} name="game" style ={style.input} type="text" placeholder="What game were you playing?" value = {props.value.game}></input>
            <input onChange={props.add} name="date" style ={style.input} value = {props.value.date} onFocus={(e) => {
                e.target.type = "date"}}
                placeholder="When were you playing it?">
                </input>
            <input onChange={props.add} name="score" style ={style.input} value = {props.value.score} onFocus={(e) => {
                e.target.type = "number"}}
                placeholder="Enter your score">
                </input>
            <label name="trash" style={style.label}>Click here to enter smack talk<input id="check" checked={ props.value.checked} onChange={props.checker} style={style.checkbox} type="checkbox"></input></label>
            <Button onClick = {props.submit} name="Submit"/>
        </form>

        </fieldset>
    )
}

// ^^^research using a date picker? or some kind of date input for 3rd input
