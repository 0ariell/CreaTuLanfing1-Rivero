/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <Link
        to={`/producto/${product.id}`}
        className={styles.productImageContainer}
      >
        <img
          src={product.image}
          alt={product.name}
          className={styles.productImage}
        />
      </Link>
      <div className={styles.productInfo}>
        <p className={styles.precio}>${product.price}</p>
        <Link to={`/producto/${product.id}`} className={styles.nameContainer}>
          <p className={styles.name}>{product.name}</p>
        </Link>
        <p className={styles.description}>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
