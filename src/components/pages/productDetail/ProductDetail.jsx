import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import { CartContext } from "../../../context/CartContext";
import styles from "./productDetail.module.css";
import ItemCount from "../../common/itemCount/ItemCount";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import UnsplashImg from "../../data/UnsplashImg";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setProduct({
            id: docSnap.id,
            name: data.name,
            price: data.price,
            category: data.category,
            image: data.image,
            stock: data.stock,
            description: data.description || "Descripción no disponible",
          });
        } else {
          setError("Producto no encontrado");
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Error al cargar el producto");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product || product.stock === 0) return;

    if (quantity > product.stock) {
      alert(`No hay suficiente stock. Máximo disponible: ${product.stock}`);
      return;
    }

    addToCart({
      ...product,
      quantity: quantity,
    });

    alert(
      `Agregaste ${quantity} ${
        quantity === 1 ? "unidad" : "unidades"
      } al carrito`
    );
  };

  if (loading) {
    return <div className={styles.loading}>Cargando producto...</div>;
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>{error}</p>
        <Link to="/productos" className={styles.productDetailBackButton}>
          <ArrowLeft size={18} />
          Volver a productos
        </Link>
      </div>
    );
  }

  return (
    product && (
      <div className={styles.productDetailContainer}>
        <div className={styles.productDetailImageContainer}>
          <UnsplashImg productName={product.name} category={product.category} />
        </div>

        <div className={styles.productDetailContent}>
          <h2 className={styles.productDetailName}>{product.name}</h2>
          <p className={styles.productDetailPrice}>${product.price}</p>
          <p className={styles.productDetailCategory}>{product.category}</p>
          <p className={styles.productDetailDescription}>
            {product.description}
          </p>
          <p className={styles.productDetailStock}>
            Stock disponible: {product.stock}
          </p>

          <div className={styles.productDetailBuySection}>
            <ItemCount
              stock={product.stock}
              initial={1}
              onAdd={handleAddToCart}
              setQuantity={setQuantity}
            />

            <button
              onClick={handleAddToCart}
              className={styles.productDetailBuyButton}
              disabled={product.stock === 0}
            >
              <ShoppingCart size={18} />
              {product.stock === 0 ? "Sin stock" : "Añadir al carrito"}
            </button>
          </div>

          <Link to="/productos" className={styles.productDetailBackButton}>
            <ArrowLeft size={18} />
            Volver a productos
          </Link>
        </div>
      </div>
    )
  );
};

export default ProductDetail;
