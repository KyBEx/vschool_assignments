import React, {Component} from "react";
import {connect} from "react-redux";
import {addItem} from "../../redux/things/reducer"

class Form extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            url: "",
            description: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    handleChange (e) {
        this.setState( {
            [e.target.name]: e.target.value
        })
    }

    onSubmit (e) {
        e.preventDefault();
        // we need to pass this.state to action createStore
        this.props.addItem(this.state);
        this.setState( {
            title: "",
            url: "",
            description: ""
        });



    }


    render() {
        console.log(this.props)
        const style = {
            div: {
                backgroundColor: "lightblue",
                height: "100px",
                display: "block",
                textAlign: "center",
                verticalAlign: "middle",
                lineHeight: "100px"
            }
        }


        return (
            <div style = {style.div}>
            <form onSubmit={this.onSubmit}>
                <input
                    onChange = {this.handleChange}
                    placeholder="Title"
                    name="title"
                    value={this.state.title}
                    />
                <input
                    onChange = {this.handleChange}
                    placeholder="Img URL"
                    name="url"
                    value={this.state.url}
                    />
                <input
                    onChange = {this.handleChange}
                    placeholder="Description"
                    name="description"
                    value={this.state.description}
                    />
                <button>Submit</button>
            </form>
            </div>
        )
    }
}

function mapStatetoProps(state){
    return state
}

export default connect(mapStatetoProps, { addItem })(Form)
