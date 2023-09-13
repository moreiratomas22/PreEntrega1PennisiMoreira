import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTicket } from "../../utils/utils";
import Loader from "../Loader/Loader";

const PurchasedCart = () => {
  const [loader, setloader] = useState(true);
  const [ticket, setTicket] = useState({});
  const { ticketId } = useParams();

  useEffect(() => {
    getTicket(ticketId).then((data) => {
      setTicket(data.data());
      setloader(false);
    });
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : ticket ? (
        <>
          <p>Fecha realizada la compra: {ticket.date}</p>
          <table className="w-2/3 mx-auto my-12">
            <tbody>
              <tr className="">
                <th className="w-1/4 px-4 py-2">
                  <div>Producto</div>
                </th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
              </tr>

              {ticket.cart.map((item, index) => {
                return (
                  <tr key={index} className="divide-x divide-black">
                    <td className="text-center">{item.title}</td>
                    <td className="text-center">$ {item.price}</td>
                    <td className="text-center">{item.quantity}</td>
                    <td className="text-center">
                      {item.price * item.quantity}
                    </td>
                  </tr>
                );
              })}

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <th>TOTAL: $ {ticket.total}</th>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <h2>No se ha encontrado su orden de compra.</h2>
      )}
    </>
  );
};

export default PurchasedCart;
