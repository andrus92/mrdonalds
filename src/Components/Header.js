import React from "react";
import logoImg from "../image/logo.svg";
import cartInImg from "../image/cart.svg";

export const Header = (props) => {

    const handleClickCart = () => {
        props.displayOder(!props.showOrder);
    }

    return (    
        <header className="header">
            <div className="container">
                <div className="header__wrap">
                    <div className="header__logo">
                        <img src={logoImg} alt="logo" className="header__logo_img" />
                        <h3 className="header__logo_txt">MrDonald's</h3>
                    </div>
                    <button className="header__cart" onClick={handleClickCart}>
                        <img src={cartInImg} alt="cart" className="header__cart_img" />
                    </button>
                </div>
            </div>
        </header>
    )
}