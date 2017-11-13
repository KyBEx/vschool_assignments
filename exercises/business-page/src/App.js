import React from 'react';
import "./style.css";
import Navigation from "./Navigation.js";
import About from "./About.js";
import SignUp from "./SignUp.js";
import Carousel from './ImageCarousel.js'


function App () {
    const windowStyle = {
        padding: 0,
        margin: 0
    }

    return (
        <div style={windowStyle}>
            <SignUp/>
            <Navigation/>
            <Carousel/>

        </div>
    )
}


export default App;
