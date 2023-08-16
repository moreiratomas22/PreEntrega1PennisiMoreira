import React, { useEffect, useState } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { myPromise } from "../../utils/utils";
import { useParams } from "react-router-dom";

const ItemDetailConteiner = () => {
  const [product, setProduct] = useState({});
  const [loader, setLoader] = useState(true)
  const { pId } = useParams();
  console.log(pId);

  useEffect(() => {
    myPromise
      .then((data) => {
        const products = data;
        const myProduct = products.find((prod) => prod.id === pId);
        console.log(myProduct);
        setProduct(myProduct);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(()=> {
        setLoader(false)
      })
  }, []);

  return (
    <>
    {!loader ? (
      <ItemDetail item={product} /> 
    ) : (
      <h2>Cargandoooo......</h2>
    )}
    </>
  )
}

export default ItemDetailConteiner;
