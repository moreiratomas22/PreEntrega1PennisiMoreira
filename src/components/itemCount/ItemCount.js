import React, { useState } from "react";
import "./itemCount.css"
import CustomButton from "../CustomButton/CustomButton";

const ItemCount = ({initial, stock, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity-1)
        }
    }

    return (
        <div className="Contador">
            <div className="Controladores">
                <button className="button flex-row bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={decrement}>-</button>
                <h4 className="numero">{quantity}</h4>
                <button className="button flex-row bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow items-center" onClick={increment}>+</button>
            </div>
            <div>
                <CustomButton pmt="Agregar al Carrito" handleButton={() => onAdd(quantity)} disabled={!stock}/>
            </div>
        </div>
    )
}

export default ItemCount