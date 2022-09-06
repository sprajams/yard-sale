import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartWrapper({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (id, quantity) => {
    // find index of target id
    const itemIndex = cartItems.findIndex((item) => {
      return item.id === id;
    });
    if (itemIndex >= 0) {
      // if this id alreay exists ... increase the value by 1
      setCartItems((prev) => {
        const modified = [...prev];
        modified[itemIndex].quantity += quantity;
        return modified;
      });
    }
    // if index is not found, add new id and quantity
    else {
      setCartItems((prev) => [...prev, { id, quantity }]);
    }
  };

  // create array of quantities
  const quantities = cartItems.map((item) => item.quantity);
  // sum array for total number of items in cart
  const cartNum =
    quantities.length > 0 &&
    quantities.reduce((prev, current) => prev + current, 0);

  return (
    <CartContext.Provider value={{ addToCart, cartItems, cartNum }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
