import SignHeader from "@/src/components/Sign/SignHeader";
import SocialSign from "@/src/components/Sign/SocialSign";
import style from "@/pages/sign.module.css";
import { showEmailError, showPwdError } from "@/src/util/handleSignError";
import { FormEvent, useRef, useState } from "react";
import { postSignUp } from "@/src/api/postSignUp";
import Image from "next/image";
import EyeOffIcon from "@/src/assets/img/eye-off.svg";
import EyeOnIcon from "@/src/assets/img/eye-on.svg";
import { isEmailUnique } from "@/src/api/isEmailUnique";
import clsx from "clsx";

function SignUpPage() {
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [pwdErrorMessage, setPwdErrorMessage] = useState("");
  const [pwdCheckErrorMessage, setPwdCheckErrorMessage] = useState("");
  const [pwdType, setPwdType] = useState("password");
  const [pwdCheckType, setPwdCheckType] = useState("password");
  const emailInput = useRef<any>("");
  const pwdInput = useRef<any>("");
  const pwdCheckInput = useRef<any>("");

  const handleButtonClick = async (e: FormEvent) => {
    e.preventDefault();

    if (
      (await handleEmailError()) &&
      handlePwdError() &&
      handlePwdCheckError()
    ) {
      //이메일, 비밀번호가 유효한 값일 때만 api호출
      postSignUp({
        email: emailInput.current,
        password: pwdInput.current,
      });
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputRef: React.MutableRefObject<string>
  ) => {
    inputRef.current = e.target.value;
  };

  const handleEmailError = async () => {
    let isValid = false;
    const errorMessage = showEmailError(emailInput.current);
    setEmailErrorMessage(errorMessage);
    if (!errorMessage) {
      //이메일이 빈값이 아니고 올바른 형태일 때 중복체크, 그 전에는 하지 않음
      if (await isEmailUnique(emailInput.current)) {
        setEmailErrorMessage("");
        isValid = true;
      } else setEmailErrorMessage("이미 사용 중인 이메일입니다.");
    }

    return isValid;
  };

  const handlePwdError = () => {
    handlePwdCheckError();
    const errorMessage = showPwdError(pwdInput.current);
    setPwdErrorMessage(errorMessage);
    return !Boolean(errorMessage);
  };
  const handlePwdCheckError = () => {
    if (pwdCheckInput.current != pwdInput.current) {
      setPwdCheckErrorMessage("비밀번호가 일치하지 않습니다.");
      return false;
    }
    setPwdCheckErrorMessage("");
    return true;
  };
  const handlePwdEyeClick = (
    type: string,
    setType: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setType(type === "email" ? "password" : "email");
  };
  return (
    <div className={style.root}>
      <div className={style.container}>
        <SignHeader
          message="이미 회원이신가요? "
          href="/signin"
          linkMessage="로그인 하기"
        />
        <form className={style.form}>
          <div>
            <label htmlFor="email_input" className={style.label}>
              이메일
            </label>
            <input
              className={clsx(style.input, {
                [style.redBox]: emailErrorMessage,
              })}
              id="email_input"
              type="email"
              placeholder="test@codeit.com"
              onChange={(e) => handleInputChange(e, emailInput)}
              onBlur={handleEmailError}
            />
            <p className={style.errorMessage}>{emailErrorMessage}</p>
          </div>

          <div>
            <label htmlFor="pwd_input" className={style.label}>
              비밀번호
            </label>
            <div className={style.inputWrapper}>
              <input
                className={clsx(style.input, {
                  [style.redBox]: pwdErrorMessage,
                })}
                id="pwd_input"
                type={pwdType}
                placeholder="영문, 숫자 조합 8자 이상 입력해주세요"
                onChange={(e) => handleInputChange(e, pwdInput)}
                onBlur={handlePwdError}
              />
              <Image
                src={pwdType === "password" ? EyeOffIcon : EyeOnIcon}
                alt="pwd eye"
                className={style.pwdEye}
                onClick={() => handlePwdEyeClick(pwdType, setPwdType)}
              />
            </div>
            <p className={style.errorMessage}>{pwdErrorMessage}</p>
          </div>
          <div>
            <label htmlFor="pwd_check_input" className={style.label}>
              비밀번호 확인
            </label>
            <div className={style.inputWrapper}>
              <input
                className={clsx(style.input, {
                  [style.redBox]: pwdCheckErrorMessage,
                })}
                id="pwd_check_input"
                type={pwdCheckType}
                placeholder="비밀번호를 입력해주세요"
                onChange={(e) => handleInputChange(e, pwdCheckInput)}
                onBlur={handlePwdCheckError}
              />
              <Image
                src={pwdCheckType === "password" ? EyeOffIcon : EyeOnIcon}
                alt="pwd eye"
                className={style.pwdEye}
                onClick={() => handlePwdEyeClick(pwdCheckType, setPwdCheckType)}
              />
            </div>
            <p className={style.errorMessage}>{pwdCheckErrorMessage}</p>
          </div>
          <button className={style.formButton} onClick={handleButtonClick}>
            회원가입
          </button>
        </form>
        <SocialSign message="다른 방식으로 가입하기" />
      </div>
    </div>
  );
}

export default SignUpPage;
