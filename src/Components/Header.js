import React from "react";
import css from "./Header.module.css";
import logoImg from "../image/logo.svg";
import signInImg from "../image/signin.svg";

export const Header = () => {
    return (
        
        <header className={css.header}>
            <div className="container">
                <div className={css.header__wrap}>
                    <div className={css.header__logo}>
                        <img src={logoImg} alt="logo" className={css.header__logo_img} />
                        <h3 className={css.header__logo_txt} >MrDonald's</h3>
                    </div>
                    <button className={css.header__btn}>
                        <img src={signInImg} alt="signin" className={css.header__btn_img} />
                        <span className={css.header__btn_txt}>Enter</span>
                    </button>
                </div>
            </div>
        </header>
    )
}