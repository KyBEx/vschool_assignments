import React, {Component} from "react";


// function Container (props) {
//     const divStyle = {
//         div: {
//             height: "300px",
//             width: "300px",
//             display: "inline-block",
//             fontSize: "30px",
//             border: "black solid 2px"
//         }
//
//     }
//
//     return (
//         <div style={divStyle.div}>
//             {props.name}
//         </div>
//     )
//
//
// }

class Container extends Component {
    render () {
        const divStyle = {
                div: {
                    height: "300px",
                    width: "300px",
                    display: "inline-block",
                    fontSize: "30px",
                    border: "black solid 2px"
                }


    };

    return (
        <div style={divStyle.div}>
            {this.props.name}
        </div>
    )

    }
}

export default Container
