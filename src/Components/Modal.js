import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Toppings } from "./Toppings";

export const Modal = (props) => {
    const MIN = 1;
    const MAX = 20;

    const [number, setNumber] = useState(MIN);
    const [selectedToppings, setSelectedToppings] = useState([]);

    console.log('selectedToppings', selectedToppings);

    useEffect(() => {
        setNumber(1);
        setSelectedToppings([]);
    }, [props.item]);

    const closeModal = (event) => {
        if (event.target.className === 'modal') {
            props.closeModal();
        }
    }

    const decrementNumber = () => {
        if (number > MIN) {
            setNumber(number - 1);
        }
    }

    const incrementNumber = () => {
        if (number < MAX) {
            setNumber(number + 1);
        }
    }

    const addTopping = (topping) => {
        setSelectedToppings([...selectedToppings, topping]);
    }

    const removeTopping = (topping) => {
        setSelectedToppings(selectedToppings.filter(item => item !== topping));
    }

    const handleAddClick = () => {
        console.log('handleAddClick')
        props.addToOrder(props.item, number, selectedToppings);
    }

    return (
        <>
            {props.item ?
                <div className="modal" onClick={closeModal}>
                    <div className="modal__block">
                        <div className="modal__banner">
                            <img src={props.item.img} alt="banner"></img>
                        </div>
                        <div className="modal__title">
                            <h3>{props.item.name}</h3>
                            <h3>{props.item.price} zł</h3>
                        </div>         
                        <div className="modal__number">
                            <h3>Quantity</h3>
                            <div>
                                <button className="modal__number-btn" onClick={decrementNumber}>-</button>
                                <input 
                                    className="modal__input" 
                                    type="number" 
                                    value={number} 
                                    min={MIN} 
                                    max={MAX}
                                    disabled="disabled" 
                                />
                                <button className="modal__number-btn" onClick={incrementNumber}>+</button>
                            </div>
                        </div>

                        {props.item.toppings ?
                            <Toppings 
                                toppings={props.item.toppings}
                                addTopping={addTopping}
                                removeTopping={removeTopping}
                            />
                        :
                            null
                        }
                        
                        <button className="btn" onClick={handleAddClick}>Add</button>
                    </div>
                </div>
                :
                null
            }
        </>
    )
}