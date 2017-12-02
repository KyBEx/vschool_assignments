import React from "react";
import {connect} from "react-redux"

function ContactsList(props) {
    // console.log(props)

    const contacts = props.contacts.map(
        (contact,i) => <li key = {contact.name+ i}>{contact.name}</li>)

    return (
        <ul>
            {contacts}
        </ul>
    )
}


function mapStatetoProps(state){
    return state
}
export default connect(mapStatetoProps, null)(ContactsList)
