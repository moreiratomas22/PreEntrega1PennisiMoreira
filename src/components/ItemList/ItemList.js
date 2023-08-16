import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {items.map((item, index) => {
        return (
          <Item key={index} item={item}/>
        );
      })}
    </section>
  );
};

export default ItemList;
