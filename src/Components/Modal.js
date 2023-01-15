import React from "react";
import bannerImg from "../image/banner.png";

export const Modal = () => {
    return (
        <div className="modal">
            <div className="modal__block">
                <div className="modal__banner">
                    <img src={bannerImg} alt="banner"></img>
                </div>
                <div className="modal__title">
                    <h3>JS Burger</h3>
                    <h3>12 zl</h3>
                </div>         
                <div className="modal__number">
                    <span>Quantity</span>
                    <div>
                        <button>-</button>
                        <input className="modal__input" type="number"></input>
                        <button>+</button>
                    </div>
                </div>
                <button className="btn">Add</button>
            </div>
        </div>
        
    )
}