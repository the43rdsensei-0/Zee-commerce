import styles from "./inputfield.module.css";
import iconShow from "../../../assets/icons/Show.svg";
import iconHide from "../../../assets/icons/hide.svg";
import { useState } from "react";

type InputFieldProps = {
  type?: "text" | "password" | "number";
  label: string;
  error?: string;
  // isLoading?: boolean;
  disabled?: boolean;
  onInput: (value: string) => void;
  suffixIcon?: string;
  placeholder?: string;
};

export default function InputField({ type, label, error, disabled, onInput, suffixIcon, placeholder }: InputFieldProps) {
  const [currentSuffixIcon, setCurrentSuffixIcon] = useState(iconShow);
  const [currentInputType, setCurrentInputType] = useState("password");

  const handleChangeSuffixIcon = () => {
    if (currentSuffixIcon === iconShow) {
      setCurrentSuffixIcon(iconHide);
      setCurrentInputType("text");
    }
    if (currentSuffixIcon === iconHide) {
      setCurrentSuffixIcon(iconShow);
      setCurrentInputType("password");
    }
  };

  return (
    <div className={styles.input_field_wrapper}>
      <label htmlFor="input">{label}</label>

      <div className={styles.input_wrapper}>
        <input
          type={type === "password" ? currentInputType : type}
          id="input"
          onChange={(e) => onInput(e.target.value)}
          disabled={disabled}
          placeholder={placeholder ? placeholder : undefined}
        />
        {type === "password" ? (
          <span className={styles.suffix_icon} onClick={handleChangeSuffixIcon}>
            <img src={currentSuffixIcon} alt="" />
          </span>
        ) : null}

        {suffixIcon ? (
          <span className={styles.suffix_icon} onClick={handleChangeSuffixIcon}>
            <img src={suffixIcon} alt="" />
          </span>
        ) : null}
      </div>

      {error ? (
        <div className={styles.error}>
          <p className={styles.error_text}>{error}</p>
        </div>
      ) : null}
    </div>
  );
}
