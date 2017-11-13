import React from 'react';

function Navigation() {
    // const navStyle = {
    //     listStyleType: "none",
    //     textDecoration: "none",
    // };

    const navStyle = {
        ul: {
            listStyleType: "none",
            // marginLeft: "auto",
            marginTop: "auto",
            marginBottom: "auto",
            padding: 0,
            backgroundColor: "white",
            height: "100px",
            position: "relative",
            width: "500px",
            display: "inline"

        },

        li: {
            float: "right",


        },
        a: {
            textDecoration:'none',
            display: "block",
            padding: "8px 16px",
            textAlign: "center",
            color: "grey",
            fontSize: "20px",
            verticalAlign: "middle",
            textAlign: "center",
            lineHeight: "85px",
        },

        div: {
            height: "100px",
            margin: "auto",
            width: "700px"
        },

        container: {
            height: "100px"
        },

        img: {
            height: "100px",
            width: "100px",
            display: "inline"
        }

    };

    return (
        <div className="container" style={navStyle.container}>
            <div style={navStyle.div}>
                <img style={navStyle.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7NvWbWwacKwpajOjKgRhVC0B-7LtnMSmhJAHTBK2awqAmJKvNA"/>
                <ul style={navStyle.ul}>
                    <li style={navStyle.li}><a style={navStyle.a} href="https://www.amazon.com/Hutzler-571-Banana-Slicer/dp/B0047E0EII">Buy</a></li>
                    <li style={navStyle.li}><a style ={navStyle.a}href="https://www.buzzfeed.com/juliegerstein/just-do-yourself-a-favor-and-read-these-banana-slicer-review?utm_term=.ejL83KjMM#.kr81VB2ll">Media</a></li>
                    <li style={navStyle.li}><a style ={navStyle.a}href="https://www.amazon.com/Hutzler-571-Banana-Slicer/dp/B0047E0EII/ref=sr_1_1?s=kitchen&ie=UTF8&qid=1510269508&sr=1-1&keywords=banana+slicer">Reviews</a></li>
                    </ul>
            </div>
        </div>
    )
};


export default Navigation
