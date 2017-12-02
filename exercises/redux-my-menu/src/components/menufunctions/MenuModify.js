import React, {Component} from "react";

export default class MenuModify extends Component {
    constructor() {
        super();
        this.state = {
            dish: "",
            price: ""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    render() {
        return (
            <form>
                <input onChange={this.handleChange} name="dish" placeholder="Enter dish name here" type="text" value = {this.state.dish}/>
                <input onChange={this.handleChange} name="price" placeholder="Enter price here" type="text" value = {this.state.price}/>
                <button>Add</button>
            </form>
        )
    }
}
