import React from "react";
import { Order } from "./Order";
import { Menu } from "./Menu";


export const Main = () => {
    return (
        <main className="main">
            <div className="container">
                <div className="main__wrap">
                    <Order />
                    <Menu />
                </div>
            </div>
        </main>
        
    )
}