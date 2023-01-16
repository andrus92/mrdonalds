import React from "react";

export const ToppingItem = (props) => {

    return (
        // <li className="topping__item">
        //     <input type="checkbox" className="topping__checkbox" id={props.topping} ></input>
        //     <label htmlFor={props.topping}>{props.topping}</label>
        // </li>
        <label className="checkbox">
            <input type="checkbox" />
            <span>{props.topping}</span>
        </label>
    )
}