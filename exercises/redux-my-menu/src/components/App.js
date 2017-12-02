import React from "react";
import MenuTitle from "./MenuTitle";
import MenuList from "./menufunctions/MenuList";
import MenuContainer from "./menufunctions/MenuContainer"

export default function App(props) {

    return (
        <div>
            <MenuTitle/>
            <MenuContainer/>
        </div>
    )
}
