import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/" className={styles.navLink}>
          E-Commerce
        </Link>
      </div>
      <div className={styles.navLinks}>
        <Link to="/" className={styles.navLink}>
          Todos
        </Link>
        <Link to="/category/electronics" className={styles.navLink}>
          Electrónica
        </Link>
        <Link to="/category/clothing" className={styles.navLink}>
          Ropa
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
