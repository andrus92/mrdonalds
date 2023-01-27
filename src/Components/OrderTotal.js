import React from "react";

export const OrderTotal = (props) => {

    return (
        <div className="order__total">
            <span>Total price</span>
            <span>{props.totalNum}</span>
            <span>{props.totalSum} zł</span>
        </div>
        
    )
}