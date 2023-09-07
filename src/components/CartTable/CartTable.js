import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";

const CartTable = ({ cart }) => {
  const { totalCalc, deleteItemCart, clearCart } = useContext(CartContext);

  return (
    <table className="w-2/3 mx-auto my-12">
      <tbody>
        <tr className="">
          <th className="w-1/4 px-4 py-2">
            <div>Producto</div>
          </th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
          <th> </th>
        </tr>

        {cart.map((item, index) => {
          return (
            <tr key={index} className="divide-x divide-black">
              <td className="text-center">{item.title}</td>
              <td className="text-center">$ {item.price}</td>
              <td className="text-center">{item.quantity}</td>
              <td className="text-center">{item.price * item.quantity}</td>
              <td onClick={() => deleteItemCart(item)} className="flex justify-center"><p className="cursor-pointer">Eliminar</p></td>
            </tr>
          );
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
  );
};

export default CartTable;
