import styles from "./styles.module.scss";
import LocationSelect from "../LocationSelect";

const Hero = ({ locationData }) => {
  return (
    <div>
      <div className={styles.main}>
        <LocationSelect locationData={locationData} />
      </div>
    </div>
  );
};

export default Hero;
