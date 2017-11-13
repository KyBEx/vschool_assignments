import React from 'react'

function SignUp () {
    const signUpStyle = {
        div: {backgroundColor: "#E8450C",
        margin: 0,
        padding: 0,
        height: "50px"
    },
    p: {
        margin:0,
        verticalAlign: "middle",
        textAlign: "center",
        lineHeight: "50px",
        fontSize: "30px",
        color: "white"
    },
    a: {
        textDecoration: "none",
        fontSize: "20px",
        color: "white"
    }

    };

    return (
        <div style={signUpStyle.div}>
            <p style={signUpStyle.p}> <a style={signUpStyle.a} href="">Sign up to receive updates!</a></p>
        </div>
    )
}










export default SignUp
