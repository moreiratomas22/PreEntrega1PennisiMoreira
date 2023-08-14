import React, { useEffect, useState } from "react";
import {myPromise} from "../../utils/utils"
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        myPromise
        .then((data) => {
            setProducts(data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])
    
    

    return (
        <>
            <h2>{greeting}</h2>
            <ItemList items={products}/>
        </>
    )
}

export default ItemListContainer