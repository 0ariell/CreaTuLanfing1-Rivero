import { Link } from "react-router-dom";
import SearchBar from "../../common/searchBar/SearchBar";
import styles from "./navbar.module.css";
import CartWidget from "../../common/cartwidget/CartWidget";
import SplitText from "../../common/splitText/SplitText";

const Navbar = () => {


  return (
    <nav className={styles.navBar}>
      <SplitText
        text="Cenere"
        className={styles.neonText}
        delay={100}
        animationFrom={{ opacity: 0, transform: "translateY(30px) scale(0.9)" }}
        animationTo={{ opacity: 1, transform: "translateY(0) scale(1)" }}
        repeatOnHover={true}
      />
      <SearchBar className={styles.searchBar} />
      <div className={styles.linkContainer}>
        <Link to="/" className={styles.navLink}>
          Home
        </Link>
        <Link to="/productos" className={styles.navLink}>
          Products
        </Link>
        <CartWidget className={styles.cartWidget} />
      </div>
    </nav>
  );
};

export default Navbar;
