import { forwardRef, useRef, useState } from "react";
import styles from "./Input.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
import EyeOffIcon from "@/assets/signin/eye-off.svg?react";
import EyeOnIcon from "@/assets/signin/eye-on.svg?react";
const ERROR_MESSAGE = {
  emailRequired: "이메일을 입력해 주세요.",
  emailInvalid: "올바른 이메일 주소가 아닙니다.",
  emailCheck: "이메일을 확인해 주세요.",
  passwordRequired: "비밀번호를 입력해 주세요.",
  passwordInvalid: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  passwordCheck: "비밀번호를 확인해 주세요.",
};

const REG_EMAIL = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const REG_PASSWORD = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

export default forwardRef(function Input(
  { type, value, onChange, hasError, errorText, onBlur, ...props },
  ref
) {
  // const inputDom = useRef();
  // const [error, setError] = useState("");
  const [isOpenIcon, setIsOpenIcon] = useState(false);
  const [passwordType, setPasswordType] = useState(type);

  // const handleBlur = () => {
  //   const value = inputDom.current.value;
  //   let errorMessage = "";
  //   switch (type) {
  //     case "email":
  //       if (!value) {
  //         errorMessage = ERROR_MESSAGE.emailRequired;
  //         break;
  //       }
  //       if (!REG_EMAIL.test(value)) {
  //         errorMessage = ERROR_MESSAGE.emailInvalid;
  //       }
  //       break;

  //     case "password":
  //       if (!value) {
  //         errorMessage = ERROR_MESSAGE.passwordRequired;
  //         break;
  //       }
  //       if (!REG_PASSWORD.test(value)) {
  //         errorMessage = ERROR_MESSAGE.passwordInvalid;
  //       }

  //       break;
  //   }
  //   setError(errorMessage);
  // };

  const handleClick = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
    setIsOpenIcon(isOpenIcon ? false : true);
  };

  return (
    <>
      <input
        ref={ref}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        // ref={inputDom}
        // onBlur={handleBlur}
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
