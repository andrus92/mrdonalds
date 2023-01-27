import React, { useState } from "react";
import { OrderList } from "./OrderList";
import { OrderTotal } from "./OrderTotal";

export const Order = (props) => {

    const [textInfo, setTextInfo] = useState('Your have chosen nothing');

    const totalNum = props.order.reduce(
        (acc, curVal) => acc + curVal.number,
        0,
    );

    const totalSum = props.order.reduce(
        (acc, curVal) => acc + curVal.finalPrice,
        0,
    );

    const handleOrder = () => {
        
        const orders = props.order.map((elem) => (
            {
                'name': elem.item.name,
                'finalPrice': elem.finalPrice,
                'number': elem.number,
                'selectedToppings': elem.selectedToppings
            }
        ))

        let orderBody = {
            'orders': orders,
            'totalNum': totalNum,
            'totalSum': totalSum,
        }

        fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
            method: 'PUT',
            body: JSON.stringify(orderBody),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            props.clearOrder();
            console.log('Your order is ready');
            setTextInfo('Your order is ready');
            setTimeout(()=> {
                setTextInfo('Your have chosen nothing');
            }, 5000)
        })
        .catch((err) => {
            props.clearOrder();
            console.error('An error has happened');
            setTextInfo('An error has happened');
            setTimeout(()=> {
                setTextInfo('Your have chosen nothing');
            }, 5000)
        });

        
    }

    return (
        <section className="order">
            <div>
                <h2 className="order__title">Your order</h2>
                {!props.order.length ?
                    <span className="order__nothing">{textInfo}</span>
                :
                    null
                }   
                <OrderList order={props.order} removeOrderItem={props.removeOrderItem}/>
            </div>
            <div>
                <OrderTotal totalNum={totalNum} totalSum={totalSum} />
                <button className="order__btn btn" disabled={!props.order.length} onClick={handleOrder}>Order</button>
            </div>
        </section>
    )
}