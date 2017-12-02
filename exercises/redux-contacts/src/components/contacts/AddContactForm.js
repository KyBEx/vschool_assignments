import React from "react";
import {connect} from "react-redux";
import {addContact} from "../../redux/contacts/"

 class AddContactForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addContact(this.state);
        this.setState({name: ""});
        console.log(this.props)
    }

    render() {
        return (
            <form onSubmit= {this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.name}
                    name="name"
                    placeholder="New contact name"
                    onChange = {this.handleChange}/>
                <button>Add Contact</button>
            </form>
        )
    }
}

export default connect(state => state, { addContact} )(AddContactForm)

// two things go in first connect ()
// what pieces of information from the store do we want this component to have
// second is this actions--how would you like to be able to interact with the store
