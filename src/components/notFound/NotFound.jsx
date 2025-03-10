import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404 - Página no encontrada</h1>
      <p>La página que estás buscando no existe.</p>
      <Link to="/" className={styles.homeLink}>
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
