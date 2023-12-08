import Image from "next/image";
import {
  ChangeEvent,
  Dispatch,
  FocusEvent,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import styles from "./InputUserInfo.module.scss";
import classNames from "classnames/bind";
import {
  INPUT_TEXT,
  WRONG_VALUE_MESSAGE,
  VISIBLE_PASSWORD,
  PLACEHOLDER,
  VALID_EMAIL_REG,
  VALID_PSW_REG,
  OVERLAP_EMAIL,
} from "./constants.js";
import { PathName } from "../ui-input-title/SignTitle";

const cx = classNames.bind(styles);

interface InputUserInfoProps {
  isPassword: boolean;
  checkPassword?: boolean;
  onBlur?: Dispatch<SetStateAction<string>>;
  isNotSamePasswordValue?: boolean;
  pathName?: PathName;
}

function InputUserInfo({
  isPassword,
  checkPassword,
  onBlur,
  isNotSamePasswordValue,
  pathName,
}: InputUserInfoProps) {
  const [value, setValue] = useState<string | number>("");
  const [visible, setVisible] = useState(isPassword ? false : true);
  const [isWrongValue, setIsWrongValue] = useState(false);
  const [hasValue, setHasValue] = useState(true);
  const [isOverlapValue, setIsOverlapValue] = useState(false);
  const isValidValue = hasValue && !isWrongValue && !isNotSamePasswordValue;

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
    if (!isValidValue) return;

    //데이터요청
  }

  function handleBlur(
    e: FocusEvent<HTMLInputElement>,
    isPassword: boolean,
    onBlur?: Dispatch<SetStateAction<string>>
  ) {
    if (!e.target.value) {
      //값이 있는지 판단
      setHasValue(false);
      setIsWrongValue(true);
    } else {
      setHasValue(true);
      setIsWrongValue(false);
    }

    if (!isPassword) {
      //유효한 값인지 판단
      if (!VALID_EMAIL_REG.test(e.target.value)) {
        // 이메일 판단
        setIsWrongValue(true);
        return;
      }

      if (e.target.value === OVERLAP_EMAIL && pathName?.pathName.isSignupPage) {
        setIsOverlapValue(true);
        setIsWrongValue(true);
        return;
      }
    }
    if (isPassword) {
      if (!VALID_PSW_REG.test(e.target.value)) {
        // 비밀번호 판단
        setIsWrongValue(true);
        return;
      }
    }
    if (!onBlur) return;
    onBlur(e.target.value);
  }

  function handleFocus() {
    setHasValue(true);
    setIsWrongValue(false);
    setIsOverlapValue(false);
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
            onBlur={(e) => handleBlur(e, isPassword, onBlur)}
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
        {!hasValue ? ( // 값이 없을 때 메시지 출력
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

        {isNotSamePasswordValue &&
          hasValue &&
          !isWrongValue && ( // 비밀번호 확인시 값이 다를 때 메시지 출력
            <span className={cx("wrongValueMessage")}>
              {WRONG_VALUE_MESSAGE.notSamePassword}
            </span>
          )}

        {isWrongValue && hasValue && !isOverlapValue ? ( // 유효하지 않은 값일 때 메시지 출력
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

        {isOverlapValue && pathName?.pathName.isSignupPage && (
          <span className={cx("wrongValueMessage")}>
            {WRONG_VALUE_MESSAGE.overlapId}
          </span>
        )}
      </form>
    </div>
  );
}
export default InputUserInfo;
