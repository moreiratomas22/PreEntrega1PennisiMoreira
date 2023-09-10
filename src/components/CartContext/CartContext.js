import { createContext, useState } from "react";
import { generateTicket, updateProductStock, validateStock } from "../../utils/utils";

export const CartContext = createContext();
const Provider = CartContext.Provider;

const CartProvider = (props) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const saveLocalCart = (cart) => {
    const plainCart = JSON.stringify(cart)
    localStorage.setItem("cart", plainCart)
    setCart(cart)
  }

  const addToCart = (id, item, quantity) => {
    const newItem = {
      id: id,
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

   const completePurchase = async (cart, total) => {
      if (! await validateStock(cart)) return
      const ticketId = await generateTicket(cart, total)
      console.log("ticketId:",ticketId)
      cart.map(product => {
        return updateProductStock(product.id, product.quantity)
      })
      return ticketId
   };

  return (
    <Provider value={{ cart, addToCart, deleteItemCart, totalCalc, clearCart, completePurchase }}>
      {props.children}
    </Provider>
  );
};

export default CartProvider;
