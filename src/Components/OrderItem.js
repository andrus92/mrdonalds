import React from "react";
import trashImg from "../image/trash.svg";

export const OrderItem = (props) => {
    console.log("orderItemProps", props)
    return (
        <li className="order__list-item">
            <span className="order__list-name">{props.orderItem.item.name}</span>
            <span className="order__list-number">{props.orderItem.number}</span>
            <span className="order__list-price">{props.orderItem.item.price} zł</span>
            <button className="order__list-btn">
                <img src={trashImg} alt="trash"></img>
            </button>
        </li>
        
    )
}