import React from "react";


export const MenuListItem = (props) => {

    const inlineStyle = {
        backgroundImage: `url('${props.item.img}')`,   
    }

    const showModal = () => {
        props.showModal(props.item);
    }
    
    return (
        <li className="menu__list-item" style={inlineStyle} onClick={showModal} id={props.item.id}>
            <span className="menu__list-item-txt">{props.item.name}</span>
            <span className="menu__list-item-txt">{props.item.price} zł</span> 
        </li>
        
    )
}