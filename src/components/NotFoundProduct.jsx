// src/components/NotFoundProduct.jsx
import { Link, useLocation } from "react-router-dom";

const NotFoundProduct = () => {
  const location = useLocation();

  return (
    <div className="not-found-product">
      <h1>Producto no encontrado</h1>
      <p>
        No existe producto con ID: <strong>{location.state?.invalidId}</strong>
      </p>
      <div className="actions">
        <Link to="/" className="button">
          Ver todos los productos
        </Link>
        <Link to="/category/electronics" className="button">
          Ver electrónicos
        </Link>
        <Link to="/category/clothing" className="button">
          Ver ropa
        </Link>
      </div>
    </div>
  );
};

export default NotFoundProduct;
