

const Item = ({item}) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <img src={item.img} alt="" />
    </div>
  );
};

export default Item