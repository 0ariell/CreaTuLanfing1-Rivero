import { useEffect, useState } from "react";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import ProductCard from "../../common/productCard/ProductCard";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const productsRef = collection(db, "products");
        const q = query(productsRef, limit(8));
        const querySnapshot = await getDocs(q);

        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().nombre,
          price: doc.data().precio,
          category: doc.data().categoria,
          image: doc.data().imagen,
          stock: doc.data().stock,
        }));

        setFeaturedProducts(productsData);
      } catch (error) {
        console.error("Error loading featured products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Descubrí la nueva colección <span>2024</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Moda urbana para tu estilo único
          </p>
          <Link to="/productos" className={styles.ctaButton}>
            Ver colección completa
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className={styles.featuredSection}>
        <h2 className={styles.sectionTitle}>Productos Destacados</h2>
        {loading ? (
          <div className={styles.loadingGrid}>
            {[...Array(4)].map((_, i) => (
              <div key={i} className={styles.productSkeleton}></div>
            ))}
          </div>
        ) : (
          <div className={styles.productsGrid}>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
        <Link to="/productos" className={styles.viewAllButton}>
          Ver todos los productos
        </Link>
      </section>

      {/* Categories Banner */}
      <section className={styles.categoriesSection}>
        <div className={styles.categoryCard}>
          <h3>Hombre</h3>
          <Link to="/productos/hombre" className={styles.categoryLink}>
            Ver colección
          </Link>
        </div>
        <div className={styles.categoryCard}>
          <h3>Mujer</h3>
          <Link to="/productos/mujer" className={styles.categoryLink}>
            Ver colección
          </Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className={styles.newsletterSection}>
        <div className={styles.newsletterContent}>
          <h2>Suscribite a nuestro Newsletter</h2>
          <p>Recibí ofertas exclusivas y novedades antes que nadie</p>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Ingresá tu email"
              required
              className={styles.emailInput}
            />
            <button type="submit" className={styles.subscribeButton}>
              Suscribirme
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
