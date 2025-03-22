/* eslint-disable react/no-unescaped-entities */
// SearchResults.jsx
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import products from "../../data/products"; // O donde tengas los productos

const SearchResults = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query") || ""; // Obtener query de URL

  useEffect(() => {
    if (searchQuery) {
      // Filtrar productos según la búsqueda
      const results = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(results);
    }
  }, [searchQuery]);

  return (
    <div>
      <h1>Resultados de búsqueda para: "{searchQuery}"</h1>
      {filteredProducts.length > 0 ? (
        <div>
          {filteredProducts.map((product) => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No se encontraron productos.</p>
      )}
    </div>
  );
};

export default SearchResults;
