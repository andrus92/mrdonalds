import React from "react";

export const OrderTotal = (props) => {

    const totalNum = props.order.reduce(
        (acc, curVal) => acc + curVal.number,
        0,
    );

    const totalSum = props.order.reduce(
        (acc, curVal) => acc + curVal.number * curVal.item.price,
        0,
    );
      

    return (
        <div className="order__total">
            <span>Total sum</span>
            <span>{totalNum}</span>
            <span>{totalSum} zł</span>
        </div>
        
    )
}