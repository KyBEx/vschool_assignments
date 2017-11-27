import React from "react"


function Picture (props) {

    const style = {
        div: {
            height: "200px",
            width: "175px",
            backgroundImage: `url(${props.info.image})`,
            // backgroundSize: "175px 200px",
            backgroundSize: "380px , 200px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position:"relative",
            margin: "25px",
            display: "inline-block"
        },

        inner: {
            height: "30px",
            width: "175px",
            backgroundColor: "royalblue",
            position: "absolute",
            bottom: "0px",
            textAlign: "center",
            color: "white",
            fontFamily: "verdana body copy",
            opacity: ".7",
            verticalAlign: "middle",
            lineHeight: "30px"


        }

    }


    return (
        <div style = {style.div}>
            <div style = {style.inner}>{props.info.name}</div>
        </div>
    )
}

export default Picture
