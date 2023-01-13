import React from "react";
import trashImg from "../image/trash.svg";

export const OrderItem = () => {
    return (
        <li className="order__list-item">
            <span className="order__list-name">JS Burger</span>
            <span className="order__list-number">1</span>
            <span className="order__list-price">250 zl</span>
            <button className="order__list-btn">
                <img src={trashImg} alt="trash"></img>
            </button>
        </li>
        
    )
}