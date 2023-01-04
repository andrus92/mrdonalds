import React from "react";
import css from "./MenuListItem.module.css";


export const MenuListItem = (props) => {

    const inlineStyle = {
        backgroundImage: `url('${props.item.img}')`,
        
    }
    console.log('props.item.img: ', props.item.img);
    
    return (
        <li className={css.item} style={inlineStyle}>
             <span>{props.item.name}</span>
            <span>{props.item.price}</span> 
        </li>
        
    )
}