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

    const addToOrder =  (item, number) => {
        const filterRes = order.filter(elem => elem.item.name === item.name);
        if (filterRes.length === 0) {
            setOrder([...order, {item: item, number: number}]);
        } else {
            const newArray = order.map((elem) => {
                if (elem.item.name === item.name) {
                    elem.number += number;
                }
                return elem;
            })

            setOrder(newArray);
        }
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
                    <Modal item={modalItem} closeModal={closeModal} addToOrder={addToOrder} />
                </div>
            </div>
        </main>
        
    )
}