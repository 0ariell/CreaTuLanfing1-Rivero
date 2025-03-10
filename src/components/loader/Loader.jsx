import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
      <p>Cargando producto...</p>
    </div>
  );
};

export default Loader;
