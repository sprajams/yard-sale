import { useCartContext } from "../../contexts/CartContext";
import { useRouter } from "next/router";
import Link from "next/link";

const CartItem = ({ bagData }) => {
  const router = useRouter();

  const { removeFromCart, cartItems } = useCartContext();
  const { image, price, title, id, slug } = bagData;
  const handleRemove = () => {
    removeFromCart(id);
    router.reload(); // force page reload to fetch data from server
  };

  const indexCartItems = cartItems.findIndex((item) => {
    return item.id === id;
  });
  return (
    <div>
      <h3>
        <Link href="/product/[slug]" as={`/product/${slug}`}>
          <a>{title}</a>
        </Link>
      </h3>
      <h3>{id.slice(-4)}</h3>
      <span>${price}</span>
      <div style={{ width: "100px" }}>
        <Link href="/product/[slug]" as={`/product/${slug}`}>
          <a>
            <img src={image} alt="product"></img>
          </a>
        </Link>
      </div>
      <span>
        qty:
        {cartItems[indexCartItems] && cartItems[indexCartItems].quantity}
      </span>
      <button onClick={handleRemove}>Remove {id.slice(-4)}</button>
    </div>
  );
};

export default CartItem;
