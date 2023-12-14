import { forwardRef, useRef, useState } from "react";
import styles from "./Input.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
import EyeOffIcon from "@/assets/signin/eye-off.svg?react";
import EyeOnIcon from "@/assets/signin/eye-on.svg?react";

export default forwardRef(function Input(
  { type, value, hasError, errorText, ...props },
  ref
) {
  const [isOpenIcon, setIsOpenIcon] = useState(false);
  const [passwordType, setPasswordType] = useState(type);

  const handleClick = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
    setIsOpenIcon(isOpenIcon ? false : true);
  };

  return (
    <>
      <input
        ref={ref}
        value={value}
        className={cx("flex-center", "input")}
        type={passwordType}
        {...props}
      />

      {type === "password" && (
        <button type="button" onClick={handleClick} className={cx("eye-Image")}>
          {isOpenIcon ? <EyeOnIcon /> : <EyeOffIcon />}
        </button>
      )}

      {hasError && <p className={cx("error")}>{errorText}</p>}
    </>
  );
});
