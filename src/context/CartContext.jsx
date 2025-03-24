import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let isProductInCart = cart.some((item) => item.id === product.id);

    if (isProductInCart) {
      let updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: Math.min(item.quantity + product.quantity, item.stock),
            }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: product.quantity }]);
    }
  };

  const resetCart = () => setCart([]);
  const removeById = (id) => setCart(cart.filter((item) => item.id !== id));
  const getTotalAmount = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const getTotalQuantity = () =>
    cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        resetCart,
        removeById,
        getTotalAmount,
        getTotalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
