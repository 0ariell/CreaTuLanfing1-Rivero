import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import styles from "./cartWidget.module.css";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const [totalItems, setTotalItems] = useState(0);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const newTotal = cart.reduce((acc, item) => acc + item.quantity, 0);
    if (newTotal !== totalItems) {
      setAdded(true);
      const timer = setTimeout(() => setAdded(false), 600);
      setTotalItems(newTotal);
      return () => clearTimeout(timer);
    }
  }, [cart]);

  return (
    <Link to="/cart" className={styles.cartContainer}>
      <ShoppingCart className={styles.cartIcon} />
      {totalItems > 0 && (
        <span className={`${styles.cartCount} ${added ? styles.added : ""}`}>
          {totalItems}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;
