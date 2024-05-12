import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboard_wrapper}>
      <Header />

      <Footer />
    </div>
  );
}
