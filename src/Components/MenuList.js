import React from "react";
import { MenuListItem } from "./MenuListItem";



export const MenuList = (props) => {
    return (
        <ul>
            {props.list.map(item => (
                <MenuListItem key={item.id} item={item} />
            ))}
            
        </ul>
        
    )
}