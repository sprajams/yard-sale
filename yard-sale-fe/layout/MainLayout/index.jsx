import Navbar from "../../components/Navbar";
import styles from "./styles.module.scss";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.outer}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
