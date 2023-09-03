import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"

const CartTable = ({cart}) => {

    const {totalCalc, deleteItemCart, clearCart} = useContext(CartContext)

    return(
        <table>
            <tbody>

            <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th> </th>
            </tr>

            {cart.map((item,index) => {
                return (
                    <tr key={index}>
                        <td>{item.title}</td>
                        <td>$ {item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price * item.quantity}</td>
                        <td onClick={()=>deleteItemCart(item)}>Eliminar</td>
                    </tr>
                )
            })}

    

            <tr>
                <td></td>
                <td></td>
                <td></td>
                <th>TOTAL: $ {totalCalc()}</th>
                <th onClick={clearCart}>Limpiar carrito</th>
            </tr>
            </tbody>
        </table>
    )
}

export default CartTable