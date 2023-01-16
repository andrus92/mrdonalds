import React from "react";
import { OrderList } from "./OrderList";
import { OrderTotal } from "./OrderTotal";

export const Order = (props) => {
    console.log('order', props)
    return (
        <section className="order">
            <div>
                <h2 className="order__title">Your order</h2>
                {!props.order.length ?
                    <span className="order__nothing">Your have chosen nothing</span>
                :
                    null
                }   
                <OrderList order={props.order} removeOrderItem={props.removeOrderItem}/>
            </div>
            <div>
                <OrderTotal order={props.order}/>
                <button className="order__btn btn">Order</button>
            </div>
        </section>
        
    )
}