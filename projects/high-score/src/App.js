import React, {Component} from "react";
import Form from "./Form";
// import Button from "./Button";
import './font.css';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            game: "",
            date: "",
            score: "",
            trash: "",
            display: {

            }
        }
    }


    render() {
        const style = {
            div: {
                margin: "0 auto",
                display: "absolute",
                width: "1000px"
            }
        }

        return (
            <div id="main" style={style.div}>
                <Form/>
            </div>
            // box for inserting trash talk
            // box that displays results
        )
    }
}
