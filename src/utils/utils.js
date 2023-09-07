import { db } from "./firebase";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

const productosCollecion = collection(db, "productos");
export const getProducts = getDocs(productosCollecion);
//Traer productos por categoria


export const getProduct = (id) => {
    const q = doc(db, "productos", id)
    const product = getDoc(q)
    return new Promise((res, rej) => {
        res(product)
        rej((err) => console.log(err))
    })
}


//funcion getTicket(ticketId generado automaticamente por firestore) esto trae el ticket con todas las compras realizadas

//Iniciar sesion, crear una collection usuarios que can a tener sus tickets almacenados y una lista de deseados