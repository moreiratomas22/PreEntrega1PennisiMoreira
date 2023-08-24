import { useState } from "react";
import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import "./ItemDetail.css"



const ItemDetail = ({ item }) => {
  const [added, setAdded] = useState(0);

  const onAdd = (qty) => {
    setAdded(qty);
  };

  return (
    <section className="w-full">
      <div className="p-4 flex flex-row justify-between items-start m-auto lg:h-auto lg:w-6/12 bg-white rounded-b lg:rounded-b-none lg:rounded-r leading-normal">
        <div className="w-2/5 imgContainer">
          <img src={item.img} className="tamanoImg" alt="" />
        </div>
        <div className="w-3/5">
          <h2 className="text-gray-900 font-bold text-xl mb-2">
            {item.title}
          </h2>
          <p className="text-gray-700 text-base">{item.description}</p>
          <br />
          <br />
          <p className="text-gray-700 text-base">Stock: {item.stock}</p>
          <br />
          <p className="text-gray-700 text-base">Precio:$ {item.price} </p>
          <div className="flex flex-col justify-center items-center">
            {added ? (
              <>
                <p>
                  Se han agregado correctamente {added} arti­culos a tu
                  carrito!
                </p>
                <br />
                <Link to="/cart">
                  <CustomButton pmt="Finalizar Compra" />
                </Link>
              </>
            ) : (
              <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;