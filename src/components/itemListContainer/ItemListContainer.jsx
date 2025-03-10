import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../itemList/ItemList";
import Loader from "../loader/Loader";
import products from "../../data/products";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = categoryId
          ? products.filter((p) => p.category === categoryId)
          : products;
        resolve(filteredProducts);
      }, 1000);
    });

    getProducts.then((res) => setItems(res)).finally(() => setLoading(false));
  }, [categoryId]);

  return (
    <div className={styles.container}>
      {loading ? <Loader /> : <ItemList products={items} />}
    </div>
  );
};

export default ItemListContainer;
