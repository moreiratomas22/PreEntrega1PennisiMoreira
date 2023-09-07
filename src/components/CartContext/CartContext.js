import { createContext, useState } from "react";

export const CartContext = createContext();
const Provider = CartContext.Provider;

const CartProvider = (props) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const saveLocalCart = (cart) => {
    const plainCart = JSON.stringify(cart)
    localStorage.setItem("cart", plainCart)
    setCart(cart)
  }

  const addToCart = (item, quantity) => {
    const newItem = {
      title: item.title,
      price: item.price,
      quantity: quantity,
    };

    const index = cart.findIndex((item) => item.title === newItem.title);
    const isInCart = () => {
      return index !== -1;
    };
    if (isInCart()) {
      const array = [...cart];
      array[index].quantity += quantity;
      saveLocalCart(array)
    } else {
      saveLocalCart([...cart, newItem])
    }
  };

  const deleteItemCart = (item) => {
    const index = cart.findIndex(
      (searchItem) => searchItem.title === item.title
    );
    const array = [...cart];
    array.splice(index, 1);
    saveLocalCart(array);
  };

  const totalCalc = () => {
    let acum = 0;
    cart.map((item) => (acum += item.price * item.quantity));
    return acum;
  };

  const clearCart = () => {
    saveLocalCart([]);
  };

  // const finishSheep = () => {
  //   totalCalc()
  //   cartTicket <- generateTicket(cart)
  //   guardatlo en una collection en firestore
  //   Obtener el ID de la compra y mostrarlo en pantalla haciendo una consulta a firebase
  //   updateCloudStock()
  //   clearCart()
  // };

  return (
    <Provider value={{ cart, addToCart, deleteItemCart, totalCalc, clearCart }}>
      {props.children}
    </Provider>
  );
};

export default CartProvider;
