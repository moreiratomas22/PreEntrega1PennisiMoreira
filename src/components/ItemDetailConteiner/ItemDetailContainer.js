import React, { useEffect, useState } from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import { getProduct } from "../../utils/utils";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const ItemDetailConteiner = () => {
  const [product, setProduct] = useState({});
  const [loader, setLoader] = useState(true);
  const { pId } = useParams();

  useEffect(() => {
    getProduct(pId)
      .then((data) => {
        const product = data.data();
        setProduct(product);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [pId]);

  return <>{
    !loader ? (
      product ? (
        <ItemDetail pId={pId} item={product} />
      ) : (
        <h2>No se encontro el item solicitado</h2>
      )
    ) : (
    <Loader />
    )}</>;
};

export default ItemDetailConteiner;
