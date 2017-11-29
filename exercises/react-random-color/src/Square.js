import React from "react"

export default function Square(props) {
    const style = {
        backgroundColor: props.color
    }

    return (
        <div style={style}></div>
    )
}
