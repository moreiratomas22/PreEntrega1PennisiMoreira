import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import "./CartWidget.css"

const CartWidget = () => {

    const {cart} = useContext(CartContext)
    return (
        <div className="relative">
            <i className="material-icons">shopping_cart</i>
            
            {(cart.length>0) && (<p className="absolute cartLength"><span>{cart.length}</span></p>)}
        </div>
    )
}

export default CartWidget