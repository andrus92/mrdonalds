import React from "react";
import { MenuList } from "./MenuList";
import { useState } from "react";
import { useEffect } from "react";


export const Menu = (props) => {

    const [burgers, setBurgers] = useState([]);
    const [other, setOther] = useState([]);
    
    useEffect(() => {
        
        fetch('http://localhost:4000/burgers')
            .then((response) => response.json())
            .then((json) => setBurgers(json))
            .catch(err => console.error(err));
        
        fetch('http://localhost:4000/other')
            .then((response) => response.json())
            .then((json) => setOther(json))
            .catch(err => console.error(err));
    }, []);



    return (
        <section className="menu">
            <section>
                <h2 className="menu__title">Burgers</h2>
                <MenuList list={burgers} showModal={props.showModal} />
            </section>
            <section>
                <h2 className="menu__title">Snacks and beverages</h2>
                <MenuList list={other} showModal={props.showModal} />
            </section>

        </section>
        
    )
}