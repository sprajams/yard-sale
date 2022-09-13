import CartItem from "../../components/CartItem";

const ShoppingBag = ({ bag }) => {
  return (
    <>
      <h3>shopping</h3>
      {bag.length > 0 && (
        <ul>
          {bag.map((_, i) => {
            return (
              <li key={i}>
                <CartItem bagData={bag[i]} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default ShoppingBag;
