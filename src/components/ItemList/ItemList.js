import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((item, index) => {
        return (
          <Item key={index} item={item}/>
        );
      })}
    </>
  );
};

export default ItemList;
