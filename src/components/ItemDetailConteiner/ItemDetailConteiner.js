import React, { useEffect, useState } from "react"
import ItemDetail from "../itemDetail/ItemDetail"
import { myPromise } from "../../utils/utils"

const ItemDetailConteiner = ({itemId = "1"}) => {

    const [product, setProduct] = useState({})

    useEffect(()=>{
        myPromise
        .then((data) => {
            const products = data
            const myProduct = products.find(prod => prod.id === itemId)
            console.log(myProduct)
            setProduct(myProduct)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    return (
            <ItemDetail item={product}/>
    )
}

export default ItemDetailConteiner