import Image from "next/image";
import { ChangeEvent, FocusEvent, FormEvent, useState } from "react";
import styles from "./InputUserInfo.module.scss";
import classNames from "classnames/bind";
import {
  INPUT_TEXT,
  WRONG_VALUE_MESSAGE,
  VISIBLE_PASSWORD,
  PLACEHOLDER,
  VALID_EMAIL_REG,
  VALID_PSW_REG,
} from "./constants.js";

const cx = classNames.bind(styles);

interface InputUserInfoProps {
  isPassword: boolean;
  checkPassword?: boolean;
}

function InputUserInfo({ isPassword, checkPassword }: InputUserInfoProps) {
  const [value, setValue] = useState<string | number>("");
  const [visible, setVisible] = useState(isPassword ? false : true);
  const [isWrongValue, setIsWrongValue] = useState(false);
  const [hasValue, setHasValue] = useState(true);

  const eyeOnImage = "/images/eye-on.svg";
  const eyeOffImage = "/images/eye-off.svg";

  function handleClick() {
    setVisible(!visible);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    if (!e.target.value) {
      setHasValue(false);
      setIsWrongValue(true);
    } else {
      setHasValue(true);
      setIsWrongValue(false);
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    //데이터요청
  }

  function handleBlur(e: FocusEvent<HTMLInputElement>, isPassword: boolean) {
    if (!e.target.value) {
      setHasValue(false);
      setIsWrongValue(true);
    } else {
      setHasValue(true);
      setIsWrongValue(false);
    }

    if (!isPassword) {
      if (!VALID_EMAIL_REG.test(e.target.value)) {
        setIsWrongValue(true);
        return;
      }
    } else {
      if (!VALID_PSW_REG.test(e.target.value)) {
        setIsWrongValue(true);
        return;
      }
    }
  }

  function handleFocus() {
    setHasValue(true);
    setIsWrongValue(false);
  }

  return (
    <div className={cx("userInfoFormBox")}>
      {isPassword
        ? checkPassword
          ? INPUT_TEXT.passwordCheck
          : INPUT_TEXT.password
        : INPUT_TEXT.id}
      <form className={cx("userInfoForm")} onSubmit={handleSubmit}>
        <label className={cx("userInfoLabel")}>
          <input
            className={`${cx("inputBox")} ${
              isWrongValue ? cx("inputBoxFlash") : ""
            }`}
            placeholder={isPassword ? PLACEHOLDER.password : PLACEHOLDER.id}
            name={isPassword ? "userPsw" : "userId"}
            autoComplete="new-password"
            type={visible ? "text" : "password"}
            required
            onChange={handleChange}
            onBlur={(e) => handleBlur(e, isPassword)}
            onFocus={handleFocus}
            value={value}
          />
          {isPassword ? (
            <Image
              className={cx("visibleIcon")}
              src={visible ? eyeOnImage : eyeOffImage}
              alt={visible ? VISIBLE_PASSWORD.visible : VISIBLE_PASSWORD.hidden}
              width={16}
              height={16}
              onClick={handleClick}
            />
          ) : null}
        </label>
        {!hasValue ? (
          isPassword ? (
            <span className={cx("wrongValueMessage")}>
              {WRONG_VALUE_MESSAGE.password}
            </span>
          ) : (
            <span className={cx("wrongValueMessage")}>
              {WRONG_VALUE_MESSAGE.id}
            </span>
          )
        ) : null}

        {isWrongValue && hasValue ? (
          isPassword ? (
            <span className={cx("wrongValueMessage")}>
              {WRONG_VALUE_MESSAGE.wrongPassword}
            </span>
          ) : (
            <span className={cx("wrongValueMessage")}>
              {WRONG_VALUE_MESSAGE.wrongId}
            </span>
          )
        ) : null}
      </form>
    </div>
  );
}
export default InputUserInfo;
