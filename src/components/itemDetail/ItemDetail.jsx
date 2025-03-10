import ItemCount from "../itemCount/ItemCount";
import styles from "./ItemDetail.module.css";

const ItemDetail = ({ product }) => {
  const handleAdd = (quantity) => {
    console.log(`Agregado al carrito: ${quantity} ${product.name}`);
  };

  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.productDetailGrid}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.productImage}
        />
        <div className={styles.productInfo}>
          <h1 className={styles.productTitle}>{product.name}</h1>
          <p className={styles.productPrice}>${product.price}</p>
          <p className={styles.productDescription}>{product.description}</p>
          <ItemCount
            stock={product.stock}
            initial={1}
            onAdd={handleAdd}
            className={styles.productItemCount}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
