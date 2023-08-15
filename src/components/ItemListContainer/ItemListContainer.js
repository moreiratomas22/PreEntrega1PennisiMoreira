import React, { useEffect, useState } from "react";
import {myPromise} from "../../utils/utils"
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
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
    },[cId])
    
    
    return (
        <>
            <h2>{greeting}</h2>
            <ItemList items={products}/>
        </>
    )
}

export default ItemListContainer