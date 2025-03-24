import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import UnsplashImg from "../../data/UnsplashImg";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/producto/${product.id}`}
      className={styles.productCardWrapper}
      aria-label={`Ver detalles de ${product.name}`}
    >
      <div className={styles.productCard}>
        <div className={styles.productImageContainer}>
          <UnsplashImg productName={product.name} category={product.category} />
        </div>

        <div className={styles.productInfo}>
          <p className={styles.price}>${product.price}</p>
          <div className={styles.nameContainer}>
            <p className={styles.name}>{product.name}</p>
          </div>
          <p className={styles.category}>{product.category}</p>
          <p className={styles.stock}>Stock: {product.stock}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
