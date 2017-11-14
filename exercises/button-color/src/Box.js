import React, {Component} from "react";

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
             color: props.color,
             globalClick: props.globalClick,
             changedClick: false
         }
        //  console.log(this.state.color);
         this.changeColor = this.changeColor.bind(this);

    }

    changeColor() {
        console.log()
        this.setState(()=> {

            return {color: `#${Math.random().toString(16).slice(2,8)}`};
        });

    }
    componetWillReceiveProps() {
        if (this.state.color !== "purple") {
            this.state.color === "purple"

        }
        console.log(this.state.color)
    }
    // componetWillUpdate()
    render() {
        // const clickEvent = {
        //     clicked: this.props.globalClick
        // }


        const style = {
            height: "200px",
            width: "200px",
            backgroundColor: this.state.color,
            display: "inline-block",
            marginRight: "30px"
        }
        if (this.props.globalClick === "true") {
            style.backgroundColor = this.props.color

        }

        // if (this.state.changedClick === "true") {
        //     style.backgroundColor = this.state.color,
        //     this.props.globalClick === "false"
        // }
        // console.log(this.props.globalClick)

        return <div style={style} onClick={this.changeColor}></div>
    }
}








export default Box;
