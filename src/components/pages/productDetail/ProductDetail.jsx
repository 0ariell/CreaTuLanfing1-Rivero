import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../../data/products";
import { CartContext } from "../../../context/CartContext";
import styles from "./productDetail.module.css";
import ItemCount from "../../common/itemCount/ItemCount";
import { ArrowLeft, ShoppingCart } from "lucide-react";

const ProductDetail = () => {
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    const product = products.find((e) => e.id === Number(id));
    setItem(product || null);
    setQuantity(1); // Resetear cantidad al cambiar producto
  }, [id]);

  const handleAddToCart = () => {
    if (!item || item.stock === 0) return;

    if (quantity > item.stock) {
      alert(`No hay suficiente stock. Máximo disponible: ${item.stock}`);
      return;
    }

    addToCart({ ...item, quantity });
    alert(
      `Agregaste ${quantity} ${
        quantity === 1 ? "unidad" : "unidades"
      } al carrito`
    );
  };

  if (!item) return <div className={styles.loading}>Cargando producto...</div>;

  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.productDetailImageContainer}>
        <img
          src={item.image}
          alt={item.name}
          className={styles.productDetailMainImage}
        />
      </div>

      <div className={styles.productDetailContent}>
        <h2 className={styles.productDetailName}>{item.name}</h2>
        <p className={styles.productDetailPrice}>${item.price}</p>
        <p className={styles.productDetailCategory}>{item.category}</p>
        <p className={styles.productDetailDescription}>{item.description}</p>
        <p className={styles.productDetailStock}>
          Stock disponible: {item.stock}
        </p>

        <div className={styles.productDetailBuySection}>
          <ItemCount item={item} setQuantity={setQuantity} />

          <button
            onClick={handleAddToCart}
            className={styles.productDetailBuyButton}
            disabled={item.stock === 0}
          >
            <ShoppingCart size={18} />
            {item.stock === 0 ? "Sin stock" : "Añadir al carrito"}
          </button>
        </div>

        <Link to="/productos" className={styles.productDetailBackButton}>
          <ArrowLeft size={18} />
          Volver a productos
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
