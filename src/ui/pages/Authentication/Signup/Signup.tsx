import InputField from "../../../components/InputField/InputField";
import Logo from "../../../components/Logo/Logo";
import Wrapper from "../../../components/Wrapper/Wrapper";
import styles from "./signup.module.css";
import PrimaryTextButton from "../../../components/PrimaryTextButton/PrimaryTextButton";
import emailIcon from "../../../../assets/icons/email.svg";
import GoogleIcon from "../../../../assets/icons/googleIcon.svg";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <Wrapper height="screen">
      <>
        <Logo />

        <div className={styles.signup_form}>
          <div className={styles.form_heading}>
            <h2>Create an Account</h2>
            <p>Kindly provide the following details to register</p>
          </div>

          <div className={styles.form}>
            <InputField label="Email" onInput={() => {}} suffixIcon={emailIcon} />

            <InputField label="Password" type="password" onInput={() => {}} />

            <InputField label="Confirm Password" type="password" onInput={() => {}} />

            <PrimaryTextButton label="Log into Account" action={() => {}} extrastyle={styles.signup_btn} width="full" />
          </div>

          <div className={styles.or_wrapper}>
            <div className={styles.bar}></div>
            <p>Or</p>
          </div>

          <PrimaryTextButton
            label="Continue with Google"
            action={() => {}}
            extrastyle={styles.signup_btn}
            width="full"
            variant="no_background_type"
            prefixIcon={GoogleIcon}
          />

          <div className={styles.signup_foot_link_wrapper}>
            <p>Already have an account?</p>
            <Link className={styles.signup_link} to={"/login"}>
              Login
            </Link>
          </div>
        </div>
      </>
    </Wrapper>
  );
}
