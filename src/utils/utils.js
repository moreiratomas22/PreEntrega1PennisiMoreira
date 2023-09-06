import { db } from "./firebase";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

const productosCollecion = collection(db, "productos");
export const getProducts = getDocs(productosCollecion);


export const getProduct = (id) => {
    const q = doc(db, "productos", id)
    const product = getDoc(q)
    return new Promise((res, rej) => {
        res(product)
        rej((err) => console.log(err))
    })
}
