import React from "react";
import logoImg from "../image/logo.svg";
import signInImg from "../image/signin.svg";

export const Header = () => {
    return (
        
        <header className="header">
            <div className="container">
                <div className="header__wrap">
                    <div className="header__logo">
                        <img src={logoImg} alt="logo" className="header__logo_img" />
                        <h3 className="header__logo_txt">MrDonald's</h3>
                    </div>
                    <button className="header__btn">
                        <img src={signInImg} alt="signin" className="header__btn_img" />
                        <span className="header__btn_txt">Enter</span>
                    </button>
                </div>
            </div>
        </header>
    )
}