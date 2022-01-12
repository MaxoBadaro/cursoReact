import React from "react";
import cart from "../img/cart.png";
import "./cart.css";

export default function CartWidget (prop){
    return(
        <>
        <img src={cart} alt="cart icon"></img>
        <p>{prop.count}</p>
        </>
    )
}

