import React from "react";
import style from './style.css';

function Navbar () {
    return (
        <nav>
            <ul id="navlist">
                <li className = "item"><a href="http://google.com" target="_blank">Home</a></li>
                <li className = "item"><a href="http://yahoo.com" target="_blank">About</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
