import React from "react";
import { OrderList } from "./OrderList";
import { OrderTotal } from "./OrderTotal";

export const Order = () => {
    return (
        <section className="order">
            <div>
                <h2 className="order__title">Your order</h2>
                <span className="order__nothing">Your have chosen nothing</span>
                <OrderList />
            </div>
            <div>
                <OrderTotal />
                <button className="order__btn btn">Order</button>
            </div>
        </section>
        
    )
}