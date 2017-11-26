import React, {Component} from "react";
import Form from "./Form";
import Button from "./Button";
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
            display: []
        }
        this.add = this.add.bind(this);
        this.submit = this.submit.bind(this);
        this.scores = this.scores.bind(this);
    }

    add(e) {
        this.setState({
                [e.target.name]: e.target.value
            })
    }

    submit(e) {
        localStorage.setItem(`${this.state.name}${this.state.game}
            ${this.state.score}`, JSON.stringify(this.state));
            // let myValue = localStorage.getItem(`${this.state.name}${this.state.game}
            // ${this.state.date}${this.state.score}`)
            // console.log(typeof JSON.parse(myValue))
        this.setState(prevState => {

            // prevState.display.push(JSON.parse(myValue))

            return (
                {
            name: "",
            game: "",
            date: "",
            score: "",
            trash: "",
            display: prevState.display
            }
        )
    })
        e.preventDefault();
    }

    scores() {
        console.log("test");
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
                <Form add= {this.add} submit={this.submit} scores={this.scores}  value={this.state}/>
            </div>
            // box for inserting trash talk
            // box that displays results
        )
    }
}
