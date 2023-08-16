import ItemCount from "../itemCount/ItemCount";

const ItemDetail = ({ item }) => {
  const onAdd = () => {
    console.log("On Add");
  };

  return (
    <>

<section className="h-screen p-auto">

      <div className="max-w-sm w-full lg:max-w-full lg:flex m-auto">
        <div className="h-4/12 w-4/12">
          <img src={item.img} alt="" />
        </div>
        <div className="h-4/12 lg:h-auto lg:w-4/12 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between items-center leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">{item.title}</div>
            <p className="text-gray-700 text-base">{item.description}</p>
            <p className="text-gray-700 text-base">Stock: {item.stock}</p>
            <p className="text-gray-700 text-base">Precio:$ {item.price} </p>
          </div>
          <div className="flex items-center">
            <ItemCount
              initial={1}
              stock={item.stock}
              onAdd={(quantity) => console.log("Cantidad agregada: ", quantity)}
            />
          </div>
        </div>
      </div>
</section>
    </>
  );
};

export default ItemDetail;
