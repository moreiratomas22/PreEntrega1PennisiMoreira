

const ItemDetail = ({item}) => {

    const onAdd = () => {
        console.log("On Add")
    }

    return (
        <>
       <div>
      <h3>{item.title}</h3>
      <p>$ {item.price}</p>
      <img src={item.img} alt="" />
      <p></p>
    </div>
        </>
    )
}

export default ItemDetail