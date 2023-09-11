import React, { useEffect, useState } from "react";
import { getProducts } from "../../utils/utils";
import ItemList from "../ItemList/ItemList";
import { useParams, Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import TinyButton from "../CustomButton/TinyButton";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [inputTicketId, setInputTicketId] = useState("")
  const [loader, setLoader] = useState(true);
  const { cId } = useParams();

  useEffect(() => {
    getProducts(cId)
      .then((data) => {
        const products = data.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        });
        setProducts(products);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [cId]);

  return (
    <>
      <h2 className=" align-center justify-center h-8 items-center flex text-bold font-serif text-3xl my-5">
        Bienvenidos a la tienda On-Line de TUFONO store
      </h2>
      {loader ? (
      <Loader />
      ) : (
        products.length > 0 ? ( 
          <ItemList items={products} />

        ) : ( 
          <h2>No se encontro la categoria solicitada</h2>
        )
      )}
      <div className="flex m-10 items-end justify-end">
          <input onChange={(e)=>setInputTicketId(e.target.value)} id="ticketId" type="text" placeholder="Inserte ID de su compra" className="rounded border-2 border-black"/>
          <Link to={"/purchase/" + inputTicketId}><TinyButton pmt="Consultar"/></Link>
      </div>
    </>
  );
};

export default ItemListContainer;
