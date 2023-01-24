import React from "react";
import { useState } from "react";

import { Order } from "./Order";
import { Menu } from "./Menu";
import { Modal } from "./Modal";

export const Main = () => {
    const [modalItem, setModalItem] = useState(null);
    const [order, setOrder] = useState([]);

    const showModal = (item) => {
        setModalItem(item);
    }

    const closeModal = () => {
        setModalItem(null);
    }

    const addToOrder =  (item, number, selectedToppings, finalPrice, timestamp) => {

        setOrder([...order, {item: item, number: number, selectedToppings: selectedToppings, finalPrice: finalPrice, timestamp: timestamp}]);

        setModalItem(null);
    }

    const removeOrderItem = (id) => {
        const newArray = order.filter(elem => elem.item.id !== id);
        setOrder(newArray);
    }

    return (
        <main className="main">
            <div className="container">
                <div className="main__wrap">
                    <Order order={order} removeOrderItem={removeOrderItem} />
                    <Menu showModal={showModal}/>
                    {
                        modalItem ?
                        <Modal item={modalItem} closeModal={closeModal} addToOrder={addToOrder} />
                        :
                        null
                    }
                    
                </div>
            </div>
        </main>
        
    )
}