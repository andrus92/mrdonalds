import React from "react";
import { OrderItem } from "./OrderItem";

export const OrderList = (props) => {

    console.log("ORDERLSIT__PR", props)

    return (
        <ul className="order__list">
            {props.order.map(item => (
                <OrderItem key={`OrderItem_` + item.item.id} orderItem={item}/>
            ))
            }
        </ul>
        // <ul className="order__list">
        //     <OrderItem orderItem={props.orderItem}/>
        //     <OrderItem />
        //     <OrderItem />
        // </ul>
        
    )
}

