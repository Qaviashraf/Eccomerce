// import { NavLink } from "react-router-dom";
import { Cart } from "./Cart"
import "./item.css"
import { useState } from "react"



export const Item = ({item,handleClick}) => {
const { id, name, price, image} = item;
    return (
        <>
        <div className="back">
        <div className="item-img">
        <img className="small" src={image} alt="" />
        </div> 
        <h3>{name}</h3>
        <p>Rs {price}</p>
        
        <button className="cart-Btn" 
        onClick={() => handleClick(item)}
        >Add Cart</button>
        
        </div>
        

        </>
    )
}

