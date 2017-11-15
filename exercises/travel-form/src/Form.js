import React from "react"


function Form () {
    const style = {
        display: "block"
    }

return (
    <form style = {style}>
        First Name: <input style={style}/>
        Last Name: <input style={style}/>
        Age: <input style={style}/>
        Gender: <input style={style}/>
        Destination: <input style={style}/>
        Dietary Restrictions: <input style={style}/>
    </form>
)

}


export default Form
