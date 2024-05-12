import { Link } from "react-router-dom";
import Logo from "../../../components/Logo/Logo";
import Wrapper from "../../../components/Wrapper/Wrapper";
import styles from "./login.module.css";
import InputField from "../../../components/InputField/InputField";
import PrimaryTextButton from "../../../components/PrimaryTextButton/PrimaryTextButton";
import emailIcon from "../../../../assets/icons/email.svg";
import GoogleIcon from "../../../../assets/icons/googleIcon.svg";

export default function Login() {
  return (
    <Wrapper height="screen">
      <>
        <Logo />

        <div className={styles.login_form}>
          <div className={styles.form_heading}>
            <h2>Login</h2>
            <p>Enter your credentials to access your account</p>
          </div>

          <div className={styles.form}>
            <InputField label="Email" onInput={() => {}} suffixIcon={emailIcon} />

            <InputField label="Password" type="password" onInput={() => {}} />

            <div className={styles.flex_wrapper}>
              <div className={styles.remember_me_wrapper}>
                <input className={styles.input} type="checkbox" name="remember me" id="remember" />
                <a href="">Remember me</a>
              </div>
              <Link to={"/"} className={styles.forgot_password}>
                Forgot Password?
              </Link>
            </div>

            <PrimaryTextButton label="Log into Account" action={() => {}} extrastyle={styles.login_btn} width="full" />
          </div>

          <div className={styles.or_wrapper}>
            <div className={styles.bar}></div>
            <p>Or</p>
          </div>

          <PrimaryTextButton
            label="Continue with Google"
            action={() => {}}
            extrastyle={styles.login_btn}
            width="full"
            variant="no_background_type"
            prefixIcon={GoogleIcon}
          />

          <div className={styles.login_foot_link_wrapper}>
            <p>First time?</p>
            <Link className={styles.signup_link} to={"/signup"}>
              Create Account
            </Link>
          </div>
        </div>
      </>
    </Wrapper>
  );
}
