import React from "react";
import trashImg from "../image/trash.svg";
import { OrderToppings } from "./OrderToppings";

export const OrderItem = (props) => {
    console.log('props.orderItem.selectedToppings', props.orderItem.selectedToppings.length)

    const removeItem = () => {
        props.removeOrderItem(props.orderItem.item.id);
    }

    return (
        <li className="order__list-item">
            <span className="order__list-name">{props.orderItem.item.name}</span>
            <span className="order__list-number">{props.orderItem.number}</span>
            <span className="order__list-price">{props.orderItem.item.price} zł</span>
            <button className="order__list-btn" onClick={removeItem}>
                <img src={trashImg} alt="trash"></img>
            </button>
            {props.orderItem.selectedToppings.length ?
                <OrderToppings 
                    toppings={props.orderItem.selectedToppings}
                />
                :
                null
            } 
        </li>
        
    )
}