import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <img src={item.img} alt="" />
      <Link to={"/item/" + item.id}>Ir a mas detalles</Link>
    </div>
  );
};

export default Item;
