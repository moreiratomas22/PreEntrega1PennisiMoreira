import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import Swal from "sweetalert2";
import BuyerForm from "../BuyerForm/BuyerForm";
import TinyButton from "../CustomButton/TinyButton";

const CartTable = ({ cart }) => {
  const { totalCalc, deleteItemCart, clearCart, completePurchase } =
    useContext(CartContext);

  const handleButton = async (user) => {
    const ticketId = await completePurchase(cart, totalCalc(cart), user);
    if (ticketId) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Compra realizada con éxito!, el ID de su ticket es:",
        text: ticketId,
        showConfirmButton: true,
      }).then(() => {
        clearCart();
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "No se ha podido finalizar su compra",
        text: "Falta stock de uno o más productos",
        showConfirmButton: true,
      });
    }
  };

  return (
    <div>
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
                <td
                  onClick={() => deleteItemCart(item)}
                  className="flex justify-center"
                >
                  <TinyButton pmt="Eliminar" danger={true} />
                </td>
              </tr>
            );
          })}

          <tr>
            <td></td>
            <td></td>
            <td></td>
            <th>TOTAL: $ {totalCalc()}</th>
            <th onClick={clearCart}>
              <TinyButton pmt="Limpiar carrito" clear={true} />
            </th>
          </tr>
        </tbody>
      </table>
      <BuyerForm handleButton={handleButton} />
    </div>
  );
};

export default CartTable;
