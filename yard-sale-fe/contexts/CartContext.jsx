import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartWrapper({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (data) => {
    setCartItems((prev) => [...prev, data]);
  };
  //   const removeFromCart = (data) => {
  //     setCartNum(cartNum--);
  //   };
  return (
    <CartContext.Provider value={{ addToCart, cartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
