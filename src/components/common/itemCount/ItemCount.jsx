import { useState, useEffect } from "react";
import styles from "./ItemCount.module.css";

const ItemCount = ({ stock, initial = 1, onAdd, setQuantity }) => {
  const [count, setCount] = useState(initial);

  // Asegurar que stock sea un número válido
  const maxStock = Number(stock) || 0;

  const handleIncrement = () => {
    if (count < maxStock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    setQuantity(count);
  }, [count, setQuantity]);

  return (
    <div className={styles.itemCountContainer}>
      <div className={styles.counter}>
        <button onClick={handleDecrement} className={styles.counterButton}>
          -
        </button>
        <span className={styles.count}>{count}</span>
        <button onClick={handleIncrement} className={styles.counterButton}>
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
