import React, {Component} from "react";
import Form from "./Form";
import DisplayBox from "./DisplayBox";
import Button2 from "./Button2";
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
            display: "hidden",
            button2: "Show Scores",
            checked: false
        }
        this.add = this.add.bind(this);
        this.submit = this.submit.bind(this);
        this.show = this.show.bind(this);
        this.checked = this.checked.bind(this);
    }

    add(e) {
        this.setState({
                [e.target.name]: e.target.value
            })
    }

    submit(e) {
        localStorage.setItem(`${this.state.name}${this.state.game}
            ${this.state.score}`, JSON.stringify(this.state));

        this.setState(prevState => {

            return (
                {
            name: "",
            game: "",
            date: "",
            score: "",
            checked: false,
            trash: ""
            }
        )
    })
        e.preventDefault();
    }

    show(e) {
        e.preventDefault();
        if (this.state.display === "hidden") {
            this.setState(prevState => {
                prevState.display = "visible";
                return ({display: prevState.display,
                        button2: "Hide Scores"})
            })
        } else {
            this.setState(prevState => {
                prevState.display = "hidden";
                return ({display: prevState.display,
                        button2: "Show Scores"})
            })
        }

    }

    checked () {
        if (this.state.checked === false) {
            this.setState(prevState => {
                prevState.checked = true;
                const trashTalk = ["I find your lack of faith disturbing", "We're the Ottomans and you're not", "Slider, you stink"]
                prevState.trash = trashTalk[Math.floor(Math.random() * trashTalk.length)]
                return ({checked: prevState.checked,
                        trash: prevState.trash});
            });
        } else {
            this.setState(prevState => {
                prevState.checked = false;
                prevState.trash = ""
                return ({checked: prevState.checked,
                        trash: prevState.trash})
            })
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
                <Form checker = {this.checked} add= {this.add} submit={this.submit} show={this.show}  value={this.state}/>
                <Button2 show={this.show} value={this.state}/>
                <DisplayBox display={this.state}/>
            </div>
            // box for inserting trash talk
            // box that displays results
        )
    }
}
