// src/components/ItemDetailContainer.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";
import products from "../data/products";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    const getProduct = new Promise((resolve) => {
      setTimeout(() => {
        const foundProduct = products.find((p) => p.id === productId);
        resolve(foundProduct || null);
      }, 1000);
    });

    getProduct
      .then((result) => {
        if (!result) {
          navigate("/404", { replace: true, state: { invalidId: productId } });
          return;
        }
        setProduct(result);
      })
      .finally(() => setLoading(false));
  }, [productId, navigate]);

  if (loading) return <Loader />;

  return product ? <ItemDetail product={product} /> : null;
};

export default ItemDetailContainer;
