import Hero from "../../components/Hero";
import Categories from "../../components/Categories";
import ListingTile from "../../components/ListingTile";
import utils from "../../styles/utils.module.scss";
import styles from "./styles.module.scss";

const Homepage = ({ listings, locations, categories }) => {
  return (
    <div className={utils.outer}>
      <Hero locationData={locations} />
      <div className={styles.inner}>
        <Categories data={categories} />
        <ul className={styles.grid}>
          {listings.length > 0 &&
            listings.map((listing, i) => {
              return (
                <li key={i}>
                  <ListingTile data={listing} />
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Homepage;
