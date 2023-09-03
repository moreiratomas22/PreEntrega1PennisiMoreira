import { useContext } from "react"
import CartTable from "../CartTable/CartTable"
import { CartContext } from "../CartContext/CartContext"
import { Link } from "react-router-dom"

const CartContainer = () => {

    const {cart} = useContext(CartContext)
    const cartLength = cart.length
    return (
        <>
        {(cartLength > 0) ? (<CartTable cart={cart}/>) : (<p>No hay productos agregados <Link to="/" className="border-solid border-2 border-white">Volver al Inicio</Link> </p>)}
        </>
        
    )
}

export default CartContainer
