import { useState, useEffect } from "react";
import styles from "./itemCount.module.css";

const ItemCount = ({ item, setQuantity }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setQuantity(count);
  }, [count, setQuantity]);

  useEffect(() => {
    // Resetear contador si cambia el stock
    setCount(1);
  }, [item.stock]);

  const handleDecrease = () => {
    setCount((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setCount((prev) => Math.min(item.stock, prev + 1));
  };

  if (!item || item.stock === 0) return null;

  return (
    <div className={styles.countContainer}>
      <button
        className={styles.button}
        onClick={handleDecrease}
        disabled={count === 1}
      >
        -
      </button>

      <span className={styles.count}>{count}</span>

      <button
        className={styles.button}
        onClick={handleIncrease}
        disabled={count >= item.stock}
      >
        +
      </button>
    </div>
  );
};

export default ItemCount;
