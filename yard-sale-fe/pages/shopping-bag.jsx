import { useCartContext } from "../contexts/CartContext";

const ShoppingBag = () => {
  const { cartItems } = useCartContext();
  console.log(cartItems);
  return (
    <>
      <h3>shopping</h3>
      {cartItems.map((item, i) => {
        return <div key={i}>{item.title}</div>;
      })}
    </>
  );
};

export default ShoppingBag;
