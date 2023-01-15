import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const Modal = (props) => {
    const MIN = 1;
    const MAX = 20;

    const [number, setNumber] = useState(MIN);

    useEffect(() => {
        setNumber(1);
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

    const handleAddClick = () => {
        props.addToOrder(props.item, number);
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
                            <span>Quantity</span>
                            <div>
                                <button onClick={decrementNumber}>-</button>
                                <input 
                                    className="modal__input" 
                                    type="number" 
                                    value={number} 
                                    min={MIN} 
                                    max={MAX}
                                    disabled="disabled" 
                                />
                                <button onClick={incrementNumber}>+</button>
                            </div>
                        </div>
                        <button className="btn" onClick={handleAddClick}>Add</button>
                    </div>
                </div>
                :
                null
            }
        </>
    )
}