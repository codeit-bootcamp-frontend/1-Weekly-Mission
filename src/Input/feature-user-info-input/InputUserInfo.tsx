import Image from "next/image";
import {
  ChangeEvent,
  Dispatch,
  FocusEvent,
  FormEvent,
  SetStateAction,
  useCallback,
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
  USER_INFO,
} from "./constants.js";
import { PathName } from "../ui-input-title/SignTitle";

import { useRouter } from "next/router";
import axios, { AxiosResponse } from "axios";

const cx = classNames.bind(styles);

interface InputUserInfoProps {
  isPassword: boolean;
  checkPassword?: boolean;
  onBlur?: Dispatch<SetStateAction<string>>;
  isNotSamePasswordValue?: boolean;
  pathName?: PathName;
  emailValue?: string;
}

function InputUserInfo({
  isPassword,
  checkPassword,
  onBlur,
  isNotSamePasswordValue,
  pathName,
  emailValue,
}: InputUserInfoProps) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [visible, setVisible] = useState(isPassword ? false : true);
  const [isWrongValue, setIsWrongValue] = useState(false);
  const [hasFocused, setHasFocused] = useState({
    email: false,
    password: false,
  });
  const [isOverlapValue, setIsOverlapValue] = useState(false);
  // const [isValidValue, setIsValidValue] = useState(
  //   email && password && !isWrongValue && !isNotSamePasswordValue
  // );

  // console.log(isValidValue);

  const route = useRouter();
  const eyeOnImage = "/images/eye-on.svg";
  const eyeOffImage = "/images/eye-off.svg";

  function handleVisibleIconClick() {
    setVisible(!visible);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    isPassword ? setPassword(e.target.value) : setEmail(e.target.value);
    if (!e.target.value) {
      setIsWrongValue(true);
    } else {
      setIsWrongValue(false);
    }
  }

  // const signIn =

  // useCallback(() => {
  //   return axios.post("https://bootcamp-api.codeit.kr/api/sign-in", {
  //     email: emailValue,
  //     password: password,
  //   });
  // }, [emailValue, password]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const isValidValue =
    //   email && password && !isWrongValue && !isNotSamePasswordValue;

    // if (!isValidValue) return;

    // const res = await signIn();
    // if (getStatusResult) route.push("/folder");
  };

  function handleBlur(
    e: FocusEvent<HTMLInputElement>,
    isPassword: boolean,
    onBlur?: Dispatch<SetStateAction<string>>
  ) {
    const value = e.target.value;
    const hasValue = value.trim() !== "";

    setHasFocused((prevState) => ({
      ...prevState,
      [isPassword ? "password" : "email"]: true,
    }));

    setIsWrongValue(!hasValue && hasFocused[isPassword ? "password" : "email"]);

    if (!value) {
      //값이 있는지 판단
      setIsWrongValue(true);
    } else {
      setIsWrongValue(false);
    }

    if (!isPassword) {
      //유효한 값인지 판단
      if (!VALID_EMAIL_REG.test(e.target.value)) {
        // 이메일 판단
        setIsWrongValue(true);
        return;
      }

      if (value === USER_INFO.email && pathName?.pathName.isSignupPage) {
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

  function handleFocus(e: FormEvent<HTMLInputElement>) {
    {
      isPassword ? setPassword("") : setEmail("");
    }
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
            value={isPassword ? password : email}
          />
          {isPassword ? (
            <Image
              className={cx("visibleIcon")}
              src={visible ? eyeOnImage : eyeOffImage}
              alt={visible ? VISIBLE_PASSWORD.visible : VISIBLE_PASSWORD.hidden}
              width={16}
              height={16}
              onClick={handleVisibleIconClick}
            />
          ) : null}
        </label>
        {
          // 값이 없을 때 메시지 출력
          isPassword && !password && hasFocused.password ? (
            <span className={cx("wrongValueMessage")}>
              {WRONG_VALUE_MESSAGE.password}
            </span>
          ) : null
        }
        {!isPassword && !email && hasFocused.email ? (
          <span className={cx("wrongValueMessage")}>
            {WRONG_VALUE_MESSAGE.id}
          </span>
        ) : null}

        {isNotSamePasswordValue &&
          password &&
          !isWrongValue && ( // 비밀번호 확인시 값이 다를 때 메시지 출력
            <span className={cx("wrongValueMessage")}>
              {WRONG_VALUE_MESSAGE.notSamePassword}
            </span>
          )}

        {isWrongValue && (email || password) && !isOverlapValue ? ( // 유효하지 않은 값일 때 메시지 출력
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
