import React, { useEffect, useState } from "react";
import {getProducts} from "../../utils/utils"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)
    const { cId } = useParams()

    useEffect(()=>{
        getProducts
        .then((data) => {
            const products = data.docs.map((doc) => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            })
            if (cId) {
                const filteredProducts = products.filter(prod => prod.category === cId)
                return setProducts(filteredProducts)
            }
            setProducts(products)
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(()=>{
            setLoader(false)
        })
    },[cId])
    
    
    return (
        <>
            <h2>{greeting}</h2>
            {loader ? (
                <Loader />
            ) : (
                <ItemList items={products}/>
            )}
        </>
    )
}

export default ItemListContainer