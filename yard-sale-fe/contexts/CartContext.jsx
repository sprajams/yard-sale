import { createContext, useContext, useState, useEffect } from "react";
import { useCookies } from "react-cookie";

const CART_ITEMS_COOKIE_KEY = "cartItems";
const CartContext = createContext();

export function CartWrapper({ children }) {
  const [cookies, setCookies] = useCookies([CART_ITEMS_COOKIE_KEY]);
  const [cartItems, setCartItems] = useState([]);

  const modifyCart = (id, quantity) => {
    //   // find index of target id
    const itemIndex = cartItems.findIndex((item) => {
      return item.id === id;
    });
    if (itemIndex >= 0) {
      // if this id alreay exists ... increase the value by 1
      setCartItems((prev) => {
        const modified = [...prev];
        if (modified[itemIndex].quantity >= 1) {
          modified[itemIndex].quantity += quantity;
        }
        return modified;
      });
    }
    // if index is not found, add new id and quantity
    else {
      setCartItems((prev) => [...prev, { id, quantity }]);
    }
  };

  const removeFromCart = (id) => {
    // find index of target id
    const itemIndex = cartItems.findIndex((item) => {
      return item.id === id;
    });
    setCartItems((prev) => {
      const modified = [...prev];
      modified.splice(itemIndex, 1);
      return modified;
    });
  };

  // create array of quantities
  const quantities = cartItems.map((item) => item.quantity);
  // sum array for total number of items in cart
  const cartNum =
    quantities.length > 0 &&
    quantities.reduce((prev, current) => prev + current, 0);

  // update cookies when items in cart change
  useEffect(() => {
    setCookies(CART_ITEMS_COOKIE_KEY, cartItems);
  }, [cartItems]);

  // run once to rehydrate cookie value
  // TODO: what happens if cookie undefined?
  useEffect(() => {
    setCartItems(cookies[CART_ITEMS_COOKIE_KEY]);
  }, []);

  return (
    <CartContext.Provider
      value={{
        // addToCart,
        cartItems,
        cartNum,
        removeFromCart,
        cookies,
        // minusOne,
        modifyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
