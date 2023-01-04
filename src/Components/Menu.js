import React from "react";
import css from './Menu.module.css';
import { MenuList } from "./MenuList";

import dbMenu from "./DBMenu";


export const Menu = () => {
    return (
        <section className={css.menu}>
            <section>
                <h2>Burgers</h2>
                <MenuList list={dbMenu.burger}/>
            </section>
            <section>
                <h2>Snacks and beverages</h2>
                <MenuList list={dbMenu.other}/>
            </section>

        </section>
        
    )
}