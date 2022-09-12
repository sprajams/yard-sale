import { useCartContext } from "../../contexts/CartContext";
import CartItem from "../../components/CartItem";

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
                <CartItem itemData={item} bagData={bag[i]} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default ShoppingBag;
