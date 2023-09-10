import { useContext } from "react";
import CartTable from "../CartTable/CartTable";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { cart } = useContext(CartContext);
  const cartLength = cart.length;
  return (
    <>
      {cartLength > 0 ? (
        <CartTable cart={cart} />
      ) : (
        <p className="text-center my-48">
          Aùn no hay productos agregados{" "}
          <br />
          <Link
            to="/"
            className="bg-botonesTurq hover:bg-hoverButton text-white font-bold text-sm py-1 px-2 rounded inline-flex items-center mt-10"
          >
            Volver al Inicio
          </Link>{" "}
        </p>
      )}
    </>
  );
};

export default CartContainer;
