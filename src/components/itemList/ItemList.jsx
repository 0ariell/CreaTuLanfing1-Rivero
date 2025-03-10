import { Link } from "react-router-dom";
import styles from "./ItemList.module.css";

const ItemList = ({ products }) => {
  return (
    <div className={styles.productGrid}>
      {products.map((product) => (
        <div className={styles.productCard} key={product.id}>
          <Link to={`/item/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
