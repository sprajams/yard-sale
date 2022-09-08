import { useCartContext } from "../../contexts/CartContext";
import CartItem from "../../components/CartItem";
import { useEffect } from "react";

const ShoppingBag = ({ bag }) => {
  const { cartItems } = useCartContext();

  return (
    <>
      <h3>shopping</h3>
      {cartItems.length > 0 && (
        <ul>
          {cartItems.map((item, i) => {
            return (
              <li key={i}>
                <CartItem itemData={item} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default ShoppingBag;
