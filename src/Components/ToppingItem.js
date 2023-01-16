import React from "react";

export const ToppingItem = (props) => {


    const handleInputChange = (event) => {
        if (event.target.checked === true) {
            props.addTopping(props.topping);
        } else {
            props.removeTopping(props.topping);
        }
    }

    return (
        <label className="checkbox">
            <input type="checkbox" onChange={handleInputChange}/>
            <span>{props.topping}</span>
        </label>
    )
}