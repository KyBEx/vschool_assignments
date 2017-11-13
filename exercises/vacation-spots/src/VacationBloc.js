import React from "react";

function VacationBloc (props) {

const blocStyle = {
    item: {
        height: "150px",
        width: "150px",
        border: "1px solid #829356",
        position: "relative",
        display: "inline-block",
        color: "white",
        fontSize: "20px",
        padding: "45px",
        textAlign: "center",
        verticalAlign: "middle",
        lineHeight: "40px",
        marginRight: "20px",
        backgroundImage: `url(${props.background})`,
        backgroundColor: props.backgroundColor,
        backgroundSize: "250px 250px",
        backgroundRepeat: "no-repeat"
    },

    div: {
        position: "relative",
        display: "inline-block",

    }
};


    return (

        <div className="item" style={blocStyle.item}  >
                <div>Destination: {props.place} </div>
                <div>Price: {props.price}</div>
                <div>Summary: {props.summary}</div>
                <div>Go During: {props.timeToGo}</div>
        </div>
    )
}






export default VacationBloc;
