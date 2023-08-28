import { useContext } from "react"
import CartTable from "../CartTable/CartTable"
import { CartContext } from "../CartContext/CartContext"

const CartContainer = () => {

    const {cart} = useContext(CartContext)
    console.log(cart)
    return (
        <CartTable cart={cart}/>
    )
}

export default CartContainer

// DICE JOACO QUE AGREGUE PARA QUE SE VEA EL CARTTABLE, PERO QUE NECESITO USAR UN MAP(?)