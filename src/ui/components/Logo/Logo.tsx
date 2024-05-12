import styles from "./logo.module.css";
import logo from "../../../assets/icons/icon-heart.svg";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className={styles.logo_wrapper}>
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
    </div>
  );
}
