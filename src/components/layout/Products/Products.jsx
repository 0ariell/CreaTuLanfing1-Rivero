import { useState } from "react";
import products from "../../data/products";
import ProductCard from "../../common/productCard/ProductCard";
import styles from "./products.module.css";

const Products = () => {
  // Estado para guardar la categoría seleccionada
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Objeto con categorías y sus nombres para mostrar
  const categories = {
    all: "Todos",
    remeras: "Remeras",
    pantalones: "Pantalones",
    buzos: "Buzos",
    calzado: "Calzado",
    camperas: "Camperas",
  };

  // Filtra los productos según la categoría seleccionada
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "all") return true;
    return product.category === selectedCategory;
  });

  return (
    <div className={styles.productsContainer}>
      <h2 className={styles.title}>Nuestra Colección</h2>

      {/* Botones de filtrado generados dinámicamente */}
      <div className={styles.filterButtons}>
        {Object.entries(categories).map(([key, value]) => (
          <button
            key={key} // Importante para el rendimiento de React
            onClick={() => setSelectedCategory(key)}
            className={`${styles.filterBtn} ${
              selectedCategory === key ? styles.active : ""
            }`}
          >
            {value}
          </button>
        ))}
      </div>

      {/* Grid de productos filtrados */}
      <div className={styles.productsGrid}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products