import React from "react";
import { OrderToppingItem } from "./OrderToppingItem";

export const OrderToppings = (props) => {

    return (
            <ul className="toppings toppings_order">
                {props.toppings.map((topping) => {
                    return (
                        <OrderToppingItem 
                            key={topping} 
                            topping={topping}
                        />
                    )
                })}
            </ul>
    )
}