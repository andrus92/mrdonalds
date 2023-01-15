import React from "react";
import { MenuList } from "./MenuList";
import { useState } from "react";

import dbMenu from "./DBMenu";


export const Menu = (props) => {

    return (
        <section className="menu">
            <section>
                <h2 className="menu__title">Burgers</h2>
                <MenuList list={dbMenu.burger} showModal={props.showModal} />
            </section>
            <section>
                <h2 className="menu__title">Snacks and beverages</h2>
                <MenuList list={dbMenu.other} showModal={props.showModal} />
            </section>

        </section>
        
    )
}