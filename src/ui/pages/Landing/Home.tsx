import InputField from "../../components/InputField/InputField";
import Logo from "../../components/Logo/Logo";
import PhoneInputField from "../../components/PhoneInputField/PhoneInputField";
import TextField from "../../components/TextField/TextField";
import iconTest from "../../../assets/icons/Upload.svg";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <Logo />
      <h1>this is the homepage</h1>

      <InputField label="test" type="text" onInput={() => {}} suffixIcon={iconTest} placeholder="test" />

      <PhoneInputField onInput={() => {}} />

      <TextField />
    </div>
  );
}

export default Home;
