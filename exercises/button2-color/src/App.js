import React, {Component} from "react";
import Box from "./Box";

class App extends Component {
    constructor() {
        super();
        this.state = {
            color: "blue"
        }
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor() {
        this.setState( ()  => {return {
            color: "red"
            }
        }

        )
    }
    render() {

        return(
            <div>
                <Box color={this.state.color}/>
                <Box color={this.state.color}/>
                <button onClick={this.changeColor}>Change Color</button>
            </div>
        )
    }
}


export default App;
