import React from "react";
import "./style.css";
import Square from "./Square";
import Change from "./ChangeColor"

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            color: "black"
        };
        this.change = this.change.bind(this)

    };

    change() {
        const myRequest =  new XMLHttpRequest();
        myRequest.open("GET", `http://www.colr.org/json/color/random`, true);
        myRequest.onload =  () => {
            let myData = JSON.parse(myRequest.responseText);
            console.log(myData)
            this.setState({color: `#${myData.colors[0].hex}`})
        }

        myRequest.send()

    }

    render() {
        return (
            <div>
                <Square color = {this.state.color}/>
                <Change handleChange = {this.change}/>
            </div>
        )
    }
}
