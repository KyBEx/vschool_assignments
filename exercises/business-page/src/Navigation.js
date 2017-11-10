import React from 'react';

function Navigation() {
    // const navStyle = {
    //     listStyleType: "none",
    //     textDecoration: "none",
    // };

    const navStyle = {
        ul: {
            listStyleType: "none",
            margin: 0,
            padding: 0,
            backgroundColor: "#4CAF50",
            height: "50px",
            display: "absolute"
        },

        li: {
            float: "left"

        },
        a: {
            textDecoration:'none',
            display: "block",
            padding: "8px 16px",
            textAlign: "center",
            color: "white",
            fontSize: "30px"
        }

    };

    return (
            <ul style={navStyle.ul}>
                <li style={navStyle.li}><a style={navStyle.a} href="https://www.amazon.com/Hutzler-571-Banana-Slicer/dp/B0047E0EII">Buy</a></li>
                <li style={navStyle.li}><a style ={navStyle.a}href="https://www.buzzfeed.com/juliegerstein/just-do-yourself-a-favor-and-read-these-banana-slicer-review?utm_term=.ejL83KjMM#.kr81VB2ll">Media</a></li>
                <li style={navStyle.li}><a style ={navStyle.a}href="https://www.amazon.com/Hutzler-571-Banana-Slicer/dp/B0047E0EII/ref=sr_1_1?s=kitchen&ie=UTF8&qid=1510269508&sr=1-1&keywords=banana+slicer">Reviews</a></li>
            </ul>
    )
};


export default Navigation
