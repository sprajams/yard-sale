import styles from "./styles.module.scss";
import LocationSelect from "../LocationSelect";

const Hero = ({ locationData }) => {
  return (
    <div className={styles.outer}>
      <div className={styles.main}>
        <LocationSelect locationData={locationData} />
      </div>
    </div>
  );
};

export default Hero;
