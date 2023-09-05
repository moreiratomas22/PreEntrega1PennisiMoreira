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
        const products = data.data();
        setProduct(products);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  }, [pId]);

  return <>{!loader ? <ItemDetail item={product} /> : <Loader />}</>;
};

export default ItemDetailConteiner;
