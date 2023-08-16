import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="card shadow-md w-64 p-4 rounded-md m-auto">
      <h3>{item.title}</h3>
      <img className="h-64 w-64" src={item.img} alt="" />
      <Link to={"/item/" + item.id}>Ir a mas detalles</Link>
    </div>
  );
};

export default Item;
