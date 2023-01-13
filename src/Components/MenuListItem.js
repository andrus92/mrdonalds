import React from "react";


export const MenuListItem = (props) => {

    const inlineStyle = {
        backgroundImage: `url('${props.item.img}')`,   
    }
    
    return (
        <li className="menu__list-item" style={inlineStyle}>
             <span>{props.item.name}</span>
            <span>{props.item.price}</span> 
        </li>
        
    )
}