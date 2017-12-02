import React from 'react';
import {connect} from "react-redux";
import { increment, decrement } from "../redux/counter"

function App (props) {

    return (
        <div>
            <button onClick = {props.decrement}>-</button>
            <span>{props.counter}</span>
            <button onClick = {props.increment}>+</button>
        </div>
    )

}

function mapStateToProps(state) {
// typically would indicate what pieces of the store you want here
    return state
}

const AppContainer = connect(mapStateToProps, {increment, decrement})(App)
// connect needs to be told a few things-what pieces of the store do you want (by using mapStateToProps)
// and what action creators
export default AppContainer
