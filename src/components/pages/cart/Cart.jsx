import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart, resetCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();

  return (
    <div>
      <h1>Carrito de Compras</h1>

      {cart.length === 0 ? (
        <div>
          <p>El carrito está vacío</p>
          <Link to="/productos">Ir a productos</Link>
        </div>
      ) : (
        <div>
          {cart.map((product) => (
            <div
              key={product.id}
              style={{
                border: "2px solid black",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <h2>{product.name}</h2>
              <h3>Precio: ${product.price}</h3>
              <h3>Cantidad: {product.quantity}</h3>
              <h3>Total: ${product.price * product.quantity}</h3>
              <button onClick={() => removeById(product.id)}>Eliminar</button>
            </div>
          ))}
          <h2>Total a pagar: ${total}</h2>
          <button onClick={resetCart}>Vaciar carrito</button>
          <Link to="/checkout">Finalizar compra</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
