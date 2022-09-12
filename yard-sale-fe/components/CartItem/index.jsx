const CartItem = ({ itemData, bagData }) => {
  const { image, price, title } = bagData;
  return (
    <div>
      <h3>{title}</h3>
      <span>${price}</span>
      <div style={{ width: "100px" }}>
        <img src={image} alt="product"></img>
      </div>
      <span>qty:{itemData.quantity}</span>
    </div>
  );
};

export default CartItem;
