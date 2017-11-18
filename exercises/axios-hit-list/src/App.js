import React from "react";
import axios from "axios";
import Picture from "./Picture";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            hitlist: []
        }
    }

    componentDidMount() {axios.get("http://api.vschool.io:6543/hitlist.json").then((response)=> {
        this.setState({hitlist: response.data})
        })
    }

render() {
    let infoArray = this.state.hitlist.map(listItem => {
        return <Picture info={listItem}/>
    })

    const styling = {
        div: {
            // height: "100%",
            // width: "100%",
            position: "relative",
            border: "solid black 1px",
            margin: "50px",
            backgroundColor: "grey"
        },

        header: {
            height: "55px",
            width: "100%"

        },

        body: {
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "60px"

        }
    }

    return (
        <div style={styling.div}>
            <div style={styling.header}></div>
            <div style={styling.body}>{infoArray}</div>
        </div>
        )

    }

}



export default App
