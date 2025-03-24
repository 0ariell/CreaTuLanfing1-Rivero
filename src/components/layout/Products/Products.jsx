import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig"; // Ajusta la ruta según tu estructura
import ProductCard from "../../common/productCard/ProductCard";
import styles from "./products.module.css";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Categorías base + dinámicas desde Firebase
  const baseCategories = {
    all: "Todos",
    remeras: "Remeras",
    pantalones: "Pantalones",
    buzos: "Buzos",
    calzado: "Calzado",
    camperas: "Camperas",
  };

  // Obtener productos desde Firebase
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Error al cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filtrar productos
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "all") return true;
    return product.category === selectedCategory;
  });

  // Generar categorías dinámicamente desde los productos
  const dynamicCategories = [
    ...new Set(products.map((p) => p.category)),
  ].reduce((acc, category) => {
    if (!baseCategories[category]) {
      acc[category] = category.charAt(0).toUpperCase() + category.slice(1);
    }
    return acc;
  }, {});

  const allCategories = { ...baseCategories, ...dynamicCategories };

  if (loading)
    return <div className={styles.loading}>Cargando productos...</div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.productsContainer}>
      <h2 className={styles.title}>Nuestra Colección</h2>

      {/* Botones de filtrado */}
      <div className={styles.filterButtons}>
        {Object.entries(allCategories).map(([key, value]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`${styles.filterBtn} ${
              selectedCategory === key ? styles.active : ""
            }`}
          >
            {value}
          </button>
        ))}
      </div>

      {/* Grid de productos */}
      <div className={styles.productsGrid}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
