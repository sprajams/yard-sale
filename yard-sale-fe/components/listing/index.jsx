import styles from "./styles.module.scss";

const Listing = ({ data }) => {
  const { title, categories, location, image } = data;
  return (
    <div className={styles.outer}>
      <div className={styles.imgWrap}>
        <img className={styles.img} src={image} alt="product" />
      </div>
      <div className={styles.infoWrap}>
        <h3>{title}</h3>
        <span className={styles.infoSmall}>
          {location.city}, {location.state}
        </span>
      </div>
    </div>
  );
};

export default Listing;
