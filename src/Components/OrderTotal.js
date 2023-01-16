import React from "react";

export const OrderTotal = (props) => {

    const totalNum = props.order.reduce(
        (acc, curVal) => acc + curVal.number,
        0,
    );

    const totalSum = props.order.reduce(
        (acc, curVal) => acc + curVal.finalPrice,
        0,
    );
      

    return (
        <div className="order__total">
            <span>Total price</span>
            <span>{totalNum}</span>
            <span>{totalSum} zł</span>
        </div>
        
    )
}