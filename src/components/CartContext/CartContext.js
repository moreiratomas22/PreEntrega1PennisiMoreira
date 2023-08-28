import { createContext } from "react";

export const CartContext = createContext()
const Provider = CartContext.Provider

const CartProvider = (props) => {

    const cart = []

    const addToCart = (item, quantity) => {
        const newItem = {
            title: item.title,
            price: item.price,
            quantity: quantity,
        }
        const validarItemEnArreglo = () => {
            const index = cart.findIndex(item => item.title === newItem.title)
            return index !== -1
        }
        if (validarItemEnArreglo()) {
            const itemFiltrado = cart.find(item => item.title === newItem.title)
            itemFiltrado.quantity += newItem.quantity
        } else {
            cart.push(newItem)
        }
    }
    

    return (
        <Provider value={{cart, addToCart}}>
            {props.children}
        </Provider>
    )
}

export default CartProvider