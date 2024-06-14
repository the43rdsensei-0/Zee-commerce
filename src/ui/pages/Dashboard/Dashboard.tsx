import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboard_wrapper}>
      <Header />

      <main className={styles.main}>
        <Sidebar />
        <div></div>
      </main>

      <Footer />
    </div>
  );
}
