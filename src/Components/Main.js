import React from "react";
import { useState } from "react";

import { Order } from "./Order";
import { Menu } from "./Menu";
import { Modal } from "./Modal";

export const Main = () => {
    const [modalItem, setModalItem] = useState(null);
    const [order, setOrder] = useState([]);
    console.log(order);

    const showModal = (item) => {
        setModalItem(item);
    }

    const closeModal = () => {
        setModalItem(null);
    }

    const addToOrder =  (item, number) => {
        setOrder(prevOrder => [...prevOrder, {item: item, number: number}]);
        setModalItem(null);
    }

    return (
        <main className="main">
            <div className="container">
                <div className="main__wrap">
                    <Order order={order}/>
                    <Menu showModal={showModal}/>
                    <Modal item={modalItem} closeModal={closeModal} addToOrder={addToOrder} />
                </div>
            </div>
        </main>
        
    )
}