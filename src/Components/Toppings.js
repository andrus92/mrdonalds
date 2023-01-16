import React from "react";
import { ToppingItem } from "./ToppingItem";

export const Toppings = (props) => {

    return (
        <>
            <h3>Toppings</h3>
            <ul className="toppings">
                {props.toppings.map((topping) => {
                    return (
                        <ToppingItem 
                            key={topping} 
                            topping={topping}
                            addTopping={props.addTopping}
                            removeTopping={props.removeTopping}
                        />
                    )
                })}
            </ul>
        </>
    )
}