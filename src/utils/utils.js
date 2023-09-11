import { db } from "./firebase";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  addDoc,
  updateDoc,
} from "firebase/firestore";

export const getProducts = (cId) => {
  const productosCollecion = collection(db, "productos");
  const q =
    cId && query(collection(db, "productos"), where("category", "==", cId));
  const products = getDocs(q || productosCollecion);
  return new Promise((res, rej) => {
    res(products);
    rej((err) => console.log(err));
  });
};

export const getProduct = (id) => {
  const q = doc(db, "productos", id);
  const product = getDoc(q);
  return new Promise((res, rej) => {
    res(product);
    rej((err) => console.log(err));
  });
};

export const generateTicket = async (cart, total, user) => {
  console.log("user", user)
  const ticket = await addDoc(collection(db, "ticket"), {
    cart: cart,
    total: total,
    date: Date().toString(),
    user: user
  });
  return ticket.id;
};

export const updateProductStock = async (productId, quantity) => {
  const product = await getProduct(productId);
  const productStock = product.data().stock;
  const productRef = doc(db, "productos", productId);
  updateDoc(productRef, {
    stock: productStock - quantity,
  });
};

export const validateStock = async (cart) => {
  let inStock = true;
  for (let i = 0; i < cart.length; i++) {
        let product = await getProduct(cart[i].id)
        product = product.data()
            if (product.stock < cart[i].quantity) {
              inStock = false;
            }
  }
  return inStock;
};

export const getTicket = (ticketId) => {
  const q = doc(db, "ticket", ticketId);
  const ticket = getDoc(q);
  return new Promise((res, rej) => {
    res(ticket);
    rej((err) => console.log(err));
  });
}
