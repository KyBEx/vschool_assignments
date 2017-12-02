import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {createStore} from "redux";
import rootReducer from "./redux";
import {Provider} from "react-redux";
// provider gives App access to the store via Props; it is imported from react-redux;it's a component from react-redux

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>, document.getElementById("root"))
