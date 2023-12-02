import Image from "next/image";
import { useState } from "react";
import eyeOnImage from "assets/images/eye-on.svg";
import eyeOffImage from "assets/images/eye-off.svg";
import styles from "styles/InputUserInfo.module.css";

function InputUserInfo({ isPassword }) {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(isPassword ? false : true);
  const [isWrongValue, setIsWrongValue] = useState(false);
  const [hasValue, setHasValue] = useState(true);

  function handleClick() {
    setVisible(!visible);
  }

  function handleChange(e) {
    setValue(e.target.value);
    if (!e.target.value) {
      setHasValue(false);
      setIsWrongValue(true);
    } else {
      setHasValue(true);
      setIsWrongValue(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    //데이터요청
  }

  function handleBlur(e) {
    if (!e.target.value) {
      setHasValue(false);
      setIsWrongValue(true);
    } else {
      setHasValue(true);
      setIsWrongValue(false);
    }
  }

  function handleFocus() {
    setHasValue(true);
    setIsWrongValue(false);
  }

  return (
    <form className={styles.userInfoForm} onSubmit={handleSubmit}>
      <label className={styles.userInfoLabel}>
        <input
          className={`${styles.inputBox} ${
            isWrongValue ? styles.inputBoxFlash : ""
          }`}
          placeholder={
            isPassword ? "비밀번호를 입력해주세요." : "아이디를 입력해주세요."
          }
          name="userId"
          autoComplete="new-password"
          type={visible ? "text" : "password"}
          required
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          value={value}
        />
        {isPassword ? (
          <Image
            className={styles.visibleIcon}
            src={visible ? eyeOnImage : eyeOffImage}
            alt={visible ? "비밀번호 보이기" : "비밀번호 숨기기"}
            onClick={handleClick}
          />
        ) : null}
      </label>
      {!hasValue ? (
        isPassword ? (
          <span className={styles.wrongValueMessage}>
            비밀번호를 확인해주세요.
          </span>
        ) : (
          <span className={styles.wrongValueMessage}>
            아이디를 확인해주세요.
          </span>
        )
      ) : null}
    </form>
  );
}
export default InputUserInfo;
