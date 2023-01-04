import React from "react";
import css from './Main.module.css';
import { Order } from "./Order";
import { Menu } from "./Menu";


export const Main = () => {
    return (
        <main className={css.main}>
            <div className="container">
                <div className={css.main__wrap}>
                    <Order />
                    <Menu />
                </div>
            </div>
        </main>
        
    )
}