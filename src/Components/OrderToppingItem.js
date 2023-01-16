import React from "react";

export const OrderToppingItem = (props) => (
    <label className="checkbox">
        <input type="checkbox" checked disabled/>
        <span>{props.topping}</span>
    </label>
)