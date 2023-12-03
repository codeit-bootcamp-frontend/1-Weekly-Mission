import SignHeader from "@/src/components/Sign/SignHeader";
import SocialSign from "@/src/components/Sign/SocialSign";
import style from "@/pages/sign.module.css";
import { showEmailError, showPwdError } from "@/src/util/handleSignError";
import { FormEvent, useRef, useState } from "react";
import { postSignIn } from "@/src/api/postSignIn";
import Image from "next/image";
import EyeOffIcon from "@/src/assets/img/eye-off.svg";
import EyeOnIcon from "@/src/assets/img/eye-on.svg";
import clsx from "clsx";

function SignInPage() {
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [pwdErrorMessage, setPwdErrorMessage] = useState("");
  const [pwdType, setPwdType] = useState("password");
  const emailInput = useRef<any>("");
  const pwdInput = useRef<any>("");

  const handleButtonClick = async (e: FormEvent) => {
    e.preventDefault();

    if (handleEmailError() && handlePwdError()) {
      //이메일, 비밀번호가 유효한 값일 때만 api호출
      const result = postSignIn({
        email: emailInput.current,
        password: pwdInput.current,
      });
      const data = await result;
      if (data) {
        setEmailErrorMessage("이메일을 확인해주세요");
        setPwdErrorMessage("비밀번호를 확인해주세요");
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    inputRef: React.MutableRefObject<string>
  ) => {
    inputRef.current = e.target.value;
  };

  const handleEmailError = () => {
    const errorMessage = showEmailError(emailInput.current);
    setEmailErrorMessage(errorMessage);
    return !Boolean(errorMessage);
  };

  const handlePwdError = () => {
    const errorMessage = showPwdError(pwdInput.current);
    setPwdErrorMessage(errorMessage);
    return !Boolean(errorMessage);
  };

  const handlePwdEyeClick = () => {
    setPwdType(pwdType === "email" ? "password" : "email");
  };
  return (
    <div className={style.root}>
      <div className={style.container}>
        <SignHeader
          message="회원이 아니신가요? "
          href="/signup"
          linkMessage="회원 가입하기"
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
                onChange={(e) => handleInputChange(e, pwdInput)}
                onBlur={handlePwdError}
              />
              <Image
                src={pwdType === "password" ? EyeOffIcon : EyeOnIcon}
                alt="pwd eye"
                className={style.pwdEye}
                onClick={handlePwdEyeClick}
              />
            </div>
            <p className={style.errorMessage}>{pwdErrorMessage}</p>
          </div>
          <button className={style.formButton} onClick={handleButtonClick}>
            로그인
          </button>
        </form>
        <SocialSign message="소셜 로그인" />
      </div>
    </div>
  );
}

export default SignInPage;
