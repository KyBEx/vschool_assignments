import React from "react"
import {connect} from "react-redux"

const style = {
    container: {
        display: "relative",
        width: "100%"
    },

    presentation: {
        marginLeft: "auto",
        marginRight: "auto",
        display: "relative",
        width: "1000px",
        textAlign: "center"
    }

}

function List(props) {

    const things = props.uglyThings.map((object, i) => {
        return <div style={style.presentation} key = {object.title + i}>
            <h4>{object.title}</h4>
            <h6>{object.description}</h6>
            <img src={object.url} height="100px" width="100px" alt="an ugly thing"/>
        </div>
    })



    return (
        <div style={style.container}>
        {things}
        </div>
    )
}

function mapStatetoProps(state){
    return state
}

export default connect(mapStatetoProps, null)(List)
