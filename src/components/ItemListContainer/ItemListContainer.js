import React, { useEffect, useState } from "react";
import {myPromise} from "../../utils/utils"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)
    const { cId } = useParams()

    useEffect(()=>{
        myPromise
        .then((data) => {
            if (cId) {
                const filteredProducts = data.filter(prod => prod.category === cId)
                return setProducts(filteredProducts)
            }
            setProducts(data)
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