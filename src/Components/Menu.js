import React from "react";
import { MenuList } from "./MenuList";

import dbMenu from "./DBMenu";


export const Menu = () => {
    return (
        <section className="menu">
            <section>
                <h2 className="menu__title">Burgers</h2>
                <MenuList list={dbMenu.burger}/>
            </section>
            <section>
                <h2 className="menu__title">Snacks and beverages</h2>
                <MenuList list={dbMenu.other}/>
            </section>

        </section>
        
    )
}