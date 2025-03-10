import { Link, useLocation } from "react-router-dom";
import styles from "./NotFoundProduct.module.css";

const NotFoundProduct = () => {
  const location = useLocation();

  return (
    <div className={styles.notFoundProduct}>
      <h1>Producto no encontrado</h1>
      <p>
        No existe producto con ID: <strong>{location.state?.invalidId}</strong>
      </p>
      <div className={styles.actions}>
        <Link to="/" className={styles.button}>
          Ver todos los productos
        </Link>
        <Link to="/category/electronics" className={styles.button}>
          Ver electrónicos
        </Link>
        <Link to="/category/clothing" className={styles.button}>
          Ver ropa
        </Link>
      </div>
    </div>
  );
};

export default NotFoundProduct;
