import React, {Component} from "react";
import Container from "./Container.js";

// function App () {
//
//     const names = ["Bobby", "Derek", "Frank", "Lanie", "Neil", "Andrew",
//     "Brandon", "Josh", "Kyle", "Jeremy", "Luke", "Adam", "Calvin"];
//
//     return (
//         <div> {
//             names.map(function(name) {
//                 return <Container name={name}/>
//             })
//
//         }</div>
//     );
//
// }

class App extends Component {
    constructor() {
        super();
        this.names = ["Bobby", "Derek", "Frank", "Lanie", "Neil", "Andrew",
            "Brandon", "Josh", "Kyle", "Jeremy", "Luke", "Adam", "Calvin"];
    }

    render() {
        return this.names.map(function(name, i) {
            return <Container name={name} key={name+i}/>
        })
    }
}



export default App;
