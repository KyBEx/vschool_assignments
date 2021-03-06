import React, {Component} from "react"
import List from "./List"

class App extends Component {
    constructor() {
        super();
        this.state = {
            value: "",
            names: []
        }
        this.submit = this.submit.bind(this);
        this.inputBox = this.inputBox.bind(this);
        this.erase=this.erase.bind(this);

    }

    submit(e) {
        this.setState((prevState) => {
            // return prevState.names.push(prevState.value) don't do it this way
            // --.push returns the length of the original array, not an array or object--not sure how this is working
            prevState.names.push(prevState.value);
            // e.persist();
            prevState.value= ""

            return {names: prevState.names,
                    value: prevState.value}
        })
        e.preventDefault();
    }

    inputBox(event) {
        this.setState({value: event.target.value}
        )
    }

    erase(police) {
        this.setState((prevState)=> {
            let names = prevState.names;
            names.splice(police, 1);
            return {names}
        })
    }

    render() {

        // const names = ["Kyle", "Bobby", "zach"]
        const namesArray = this.state.names.map( (name, i) => {
            return <List name={name} remove={()=> this.erase(i)} key={name+i} index={i}/>
        })

        return (
            <div>
                <form onSubmit={this.submit}>
                    <input onChange={this.inputBox} value={this.state.value}></input>
                    <button onClick={this.submit}>Submit</button>
                </form>
                {namesArray}
            </div>
        )

    }
}










export default App
