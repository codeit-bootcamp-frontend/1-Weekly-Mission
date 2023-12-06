import Image from "next/image";
import { ChangeEvent, FocusEvent, FormEvent, useState } from "react";
import styles from "./InputUserInfo.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

interface InputUserInfoProps {
  isPassword?: boolean;
}

function InputUserInfo({ isPassword }: InputUserInfoProps) {
  const [value, setValue] = useState("");
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

  function handleBlur(e: FocusEvent<HTMLInputElement>) {
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
    <div className={cx("userInfoFormBox")}>
      {isPassword ? "비밀번호" : "아이디"}
      <form className={cx("userInfoForm")} onSubmit={handleSubmit}>
        <label className={cx("userInfoLabel")}>
          <input
            className={`${cx("inputBox")} ${
              isWrongValue ? cx("inputBoxFlash") : ""
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
              className={cx("visibleIcon")}
              src={visible ? eyeOnImage : eyeOffImage}
              alt={visible ? "비밀번호 보이기" : "비밀번호 숨기기"}
              width={16}
              height={16}
              onClick={handleClick}
            />
          ) : null}
        </label>
        {!hasValue ? (
          isPassword ? (
            <span className={cx("wrongValueMessage")}>
              비밀번호를 확인해주세요.
            </span>
          ) : (
            <span className={cx("wrongValueMessage")}>
              아이디를 확인해주세요.
            </span>
          )
        ) : null}
      </form>
    </div>
  );
}
export default InputUserInfo;
