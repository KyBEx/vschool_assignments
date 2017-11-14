import React, {Component} from "react"
import Box from "./Box"


class App extends Component {
    constructor() {
        super();
        this.state = {
            color: "purple"
        }
        this.globClick = "false"
        this.reset = this.reset.bind(this);
        this.changeBox = this.changeBox.bind(this);
    
    }

    reset() {
        // console.log(this.state.color);
        this.setState({color: "red"})
        // console.log(this.state.color);
        this.globClick="true"

    }

    changeBox() {
        this.setState({color:"blue"})
        // console.log(this.state.color);
        this.globClick="true";

    }





    render() {

        const style2 = {
            height: "200px",
            width: "200px",
            display: "inline"
        }
        return (
            <div style={style2}>

                <Box color={this.state.color} globalClick={this.globClick} />
                <Box color={this.state.color} globalClick={this.globClick}/>
                <Box color={this.state.color} globalClick={this.globClick}/>
                <button onClick={this.reset}>ChangeRed</button>
                <button onClick={this.changeBox}>ChangeBlue</button>

            </div>
        )
    }

}


export default App
