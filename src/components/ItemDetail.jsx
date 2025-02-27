// src/components/ItemDetail.jsx
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {
  const handleAdd = (quantity) => {
    console.log(`Agregado al carrito: ${quantity} ${product.name}`);
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
      </div>
    </div>
  );
};

export default ItemDetail;
