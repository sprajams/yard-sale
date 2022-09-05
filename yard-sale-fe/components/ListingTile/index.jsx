import Link from "next/link";
import styles from "./styles.module.scss";
import { useCartContext } from "../../contexts/CartContext";
const ListingTile = ({ data }) => {
  const cartContext = useCartContext();
  const addItem = () => {
    cartContext.addToCart(data);
  };

  const { title, location, image, slug, price, updatedTime } = data;
  return (
    //clicking on a listing tile will link to PDP with the correct route
    <div className={styles.outer}>
      {/* star/favorite icon TODO: functionality */}
      <div className={styles.starIcon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      </div>
      <Link href="/product/[slug]" as={`/product/${slug}`}>
        <a className={styles.link}>
          <div className={styles.imgWrap}>
            <img className={styles.img} src={image} alt="product" />
          </div>
          <div className={styles.infoContainer}>
            <h3 className={styles.infoTitle}>{title}</h3>
            <div className={styles.infoWrap}>
              <div className={styles.infoWrapInner}>
                <span className={styles.infoLocation}>
                  {location.city}, {location.state}
                </span>
                <span>{new Date(updatedTime).toLocaleDateString()}</span>
              </div>
              <span className={styles.price}>${price}</span>
            </div>
          </div>
        </a>
      </Link>
      <div>
        <button onClick={addItem}>+</button>
        <button onClick={cartContext.removeFromCart}>-</button>
      </div>
    </div>
  );
};

export default ListingTile;
