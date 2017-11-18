import React from "react"

function People (props) {

    return (
        <div>
            <h1>{props.info.name}</h1>
            <h2>{props.info.height}</h2>
        </div>

    )
}

export default People
