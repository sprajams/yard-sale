import styles from "./styles.module.scss";
import LocationSelect from "../LocationSelect";

const Hero = ({ locationData }) => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.main}>
          <LocationSelect locationData={locationData} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
