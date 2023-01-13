import React from "react";
import { OrderItem } from "./OrderItem";

export const OrderList = () => {
    return (
        <ul className="order__list">
            <OrderItem />
            <OrderItem />
            <OrderItem />
        </ul>
        
    )
}

