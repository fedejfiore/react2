const ItemDetail = ({name, img, price, category, description, stock}) => {
  return (
    <article>
        <h1>{name}</h1>
        <img src={img} alt="" />
        <p>Category: {category}</p>
        <p>{description}</p>
        <h2>{price}</h2>
        <h3>{stock}</h3>
    </article>
  )
}

export default ItemDetail