import React from "react"
import DisplayLine from "./DisplayLine"

export default function DisplayBox (props) {

    const style = {
        width: "100%",
        height: "1000px",
        marginTop: "10px",
        backgroundColor: "white",
        visibility: props.display.display,
    }


    // for (let i = 0; i < localStorage.length; i++) {
    //         let key = localStorage.key(i);
    //         let value = localStorage[key];
    //         console.log(key + " : " + value);
    // }
    //
    //
    // let display = JSON.parse(localStorage.getItem("EricBaldur's Gate"))

    const keys = Object.keys(localStorage);
    const displayArr = [];
    for (let i = 0; i < localStorage.length; i++) {
        displayArr.push(JSON.parse(localStorage.getItem(keys[i])))
    }

    displayArr.sort((a,b) => {
            return b.score - a.score
        })
    const finalDisplay = displayArr.map((item, i)=> {
        return <DisplayLine name= {item.name}  game={item.game} date = {item.date} score = {item.score} trash = {item.trash} key={item.game+i}/>
    })

    return (



        <div style = {style}>
            {finalDisplay}
        </div>

    )

}
