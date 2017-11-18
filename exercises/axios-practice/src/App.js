import React from "react"
import axios from "axios"
import People from "./People"
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        axios.get("https://swapi.co/api/people/").then((response)=> {
            this.setState({people: response.data.results})
        })
    }



    render() {

        return (
         this.state.people.map(person => {
            return <People info={person}/>
        })

    )
    }
}



export default App
