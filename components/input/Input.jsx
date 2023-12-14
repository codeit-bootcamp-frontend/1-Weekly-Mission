import { useRef, useState } from "react";
import styles from "./Input.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
import EyeOffIcon from "../../public/images/signin/eyeoff.png";

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

function Input(props) {
  const inputDom = useRef();
  const [error, setError] = useState("");
  const handleBlur = () => {
    const value = inputDom.current.value;
    let errorMessage = "";
    switch (props.type) {
      case "email":
        if (!REG_EMAIL.test(value)) {
          errorMessage = ERROR_MESSAGE.emailInvalid;
        }
        if (!value) {
          errorMessage = ERROR_MESSAGE.emailRequired;
        }
        break;

      case "password":
        if (!REG_PASSWORD.test(value)) {
          errorMessage = ERROR_MESSAGE.passwordInvalid;
        }
        if (!value) {
          errorMessage = ERROR_MESSAGE.passwordRequired;
        }

        break;
    }
    setError(errorMessage);
  };

  const handleClick = () => {};
  return (
    <>
      <input
        ref={inputDom}
        onBlur={handleBlur}
        className={cx("flex-center", "input")}
        type={props.type}
        {...props}
      />
      <EyeOffIcon />
      {/* {props.type === "password" && (
        <EyeOffIcon />
        //        <EyeOffIcon onClick={handleClick} className={cx("eye-Image")} />
      )} */}
      <p className={cx("error")}>{error}</p>
    </>
  );
}

export default Input;
