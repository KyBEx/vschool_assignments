import React from "react";
import Display from "./Display";
import axios from "axios";
import "./style.css";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            intro: "hello",
            get: ""
        }
        this.get = this.get.bind(this);
    }

    get() {
        axios.get("/bounties").then(response => {
            this.setState({get: response.data});
        })
    }



    render() {
        const getReady = this.state.get;
        const currentBounties = getReady ? this.state.get.map(bounty => {
            return <div className = "bounties" key = {bounty.id}>
                        <p>First Name: {bounty.fName}</p>
                        <p>Last Name: {bounty.lName}</p>
                        <p>Living: {bounty.living}</p>
                        <p>Amount: {bounty.amount}</p>
                        <p>Type: {bounty.type}</p>
                        <p>ID: {bounty.id}</p>
                        <button>Update</button>
                        <button>Delete</button>
                    </div>
        }) : null

        return(
            <main>
              <Display data = {currentBounties}/>
              <button onClick={this.get}>Get</button>
            </main>
        )
    }

}
