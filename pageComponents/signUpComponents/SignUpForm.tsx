import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";
import Image from "next/image";
import s from "./SignUpForm.module.css";
import SignFooter from "@/components/SignFooter";
import { useRouter } from "next/navigation";
import { EMAIL_REGEX, PASSWORD_REGEX } from "@/consts/RegExp";
import getStatus from "@/libs/getStatus";

interface SignInFormInput {
  email: string;
  password: string;
  passwordConfirm: string;
}

const SignUpForm = () => {
  const router = useRouter();
  const { register, handleSubmit, control } = useForm<SignInFormInput>();
  const watchedPasswordValue = useWatch({ control, name: "password" });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        router.push("/folder");
      }
    }
  }, []);

  const onSubmit: SubmitHandler<SignInFormInput> = async (data) => {
    if (emailVerified && passwordVerified && passwordConfirmVerified) {
      const result = await getStatus(data.email, "/sign-up", data.password);
      if (result.status === 200) {
        const accessToken = result?.data?.data?.accessToken;
        localStorage.setItem("accessToken", accessToken);
        router.push("/folder");
      }
    }
  };

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [passwordConfirmErrorMessage, setPasswordConFirmErrorMessage] =
    useState("");
  const [eyeImgClicked, setEyeImgClicked] = useState(false);
  const [eyeImg2Clicked, setEyeImg2Clicked] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [passwordVerified, setPasswordVerified] = useState(false);
  const [passwordConfirmVerified, setPasswordConFirmVerified] = useState(false);

  function handleEyeImgClick() {
    setEyeImgClicked(!eyeImgClicked);
  }
  function handleEyeImg2Click() {
    setEyeImg2Clicked(!eyeImg2Clicked);
  }

  useEffect(() => {
    const passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement;
    if (eyeImgClicked) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }, [eyeImgClicked]);

  useEffect(() => {
    const passwordConfirmInput = document.getElementById(
      "passwordConfirm"
    ) as HTMLInputElement;
    if (eyeImg2Clicked) {
      passwordConfirmInput.type = "text";
    } else {
      passwordConfirmInput.type = "password";
    }
  }, [eyeImg2Clicked]);

  async function handleEmailOnBlur(event: React.FocusEvent<HTMLInputElement>) {
    const inputValue = event.target.value;

    if (inputValue !== "" && !EMAIL_REGEX.test(inputValue)) {
      event.target.classList.add(s.signInputOnBlur);
      setEmailErrorMessage("올바른 이메일 주소가 아닙니다.");
      setEmailVerified(false);
    } else if (inputValue === "") {
      event.target.classList.add(s.signInputOnBlur);
      setEmailErrorMessage("이메일을 입력해 주세요.");
      setEmailVerified(false);
    } else {
      const result = await getStatus(inputValue, "/check-email");
      if (result.status !== 200) {
        event.target.classList.add(s.signInputOnBlur);
        setEmailErrorMessage(
          "중복된 이메일입니다. 다른 이메일을 사용해 주세요."
        );
        setEmailVerified(false);
      } else {
        event.target.classList.remove(s.signInputOnBlur);
        setEmailErrorMessage("");
        setEmailVerified(true);
      }
    }
  }
  function handlePasswordOnBlur(event: React.FocusEvent<HTMLInputElement>) {
    const inputValue = event.target.value;

    if (inputValue === "") {
      event.target.classList.add(s.signInputOnBlur);
      setPasswordErrorMessage("비밀번호를 입력해 주세요.");
      setPasswordVerified(false);
    } else if (inputValue !== "" && !PASSWORD_REGEX.test(inputValue)) {
      event.target.classList.add(s.signInputOnBlur);
      setPasswordErrorMessage(
        "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요."
      );
      setPasswordVerified(false);
    } else {
      event.target.classList.remove(s.signInputOnBlur);
      setPasswordErrorMessage("");
      setPasswordVerified(true);
    }
  }

  function handlePasswordConfirmOnBlur(
    event: React.FocusEvent<HTMLInputElement>
  ) {
    const inputValue = event.target.value;
    if (inputValue !== watchedPasswordValue) {
      event.target.classList.add(s.signInputOnBlur);
      setPasswordConFirmErrorMessage("비밀번호가 일치하지 않아요.");
      setPasswordConFirmVerified(false);
    } else {
      event.target.classList.remove(s.signInputOnBlur);
      setPasswordConFirmErrorMessage("");
      setPasswordConFirmVerified(true);
    }
  }

  return (
    <div className={s.signBox}>
      <form className={s.signForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.signInputs}>
          <div className={s.signInputBox}>
            <label htmlFor="email" className={s.signInputLabel}>
              이메일
            </label>
            <input
              id="email"
              className={s.signInput}
              type="text"
              placeholder="이메일을 입력해 주세요."
              {...register("email")}
              onBlur={handleEmailOnBlur}
            />
            <p className={s.errorMessage}>{emailErrorMessage}</p>
          </div>
          <div className={`${s.signInputBox} ${s.signPassword}`}>
            <label htmlFor="password" className={s.signInputLabel}>
              비밀번호
            </label>
            <input
              id="password"
              className={s.signInput}
              type="password"
              placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
              {...register("password")}
              onBlur={handlePasswordOnBlur}
            />
            <p className={s.errorMessage}>{passwordErrorMessage}</p>
            <button
              className={s.eyeButton}
              type="button"
              onClick={handleEyeImgClick}
            >
              {eyeImgClicked ? (
                <Image src="/images/eye-on.svg" alt="" width={17} height={17} />
              ) : (
                <Image
                  src="/images/eye-off.svg"
                  alt=""
                  width={17}
                  height={17}
                />
              )}
            </button>
          </div>
          <div className={`${s.signInputBox} ${s.signPassword}`}>
            <label htmlFor="passwordConfirm" className={s.signInputLabel}>
              비밀번호 확인
            </label>
            <input
              id="passwordConfirm"
              className={s.signInput}
              type="password"
              placeholder="비밀번호와 일치하는 값을 입력해 주세요."
              {...register("passwordConfirm")}
              onBlur={handlePasswordConfirmOnBlur}
            />
            <p className={s.errorMessage}>{passwordConfirmErrorMessage}</p>
            <button
              className={s.eyeButton}
              type="button"
              onClick={handleEyeImg2Click}
            >
              {eyeImg2Clicked ? (
                <Image src="/images/eye-on.svg" alt="" width={17} height={17} />
              ) : (
                <Image
                  src="/images/eye-off.svg"
                  alt=""
                  width={17}
                  height={17}
                />
              )}
            </button>
          </div>
        </div>
        {emailVerified && passwordVerified && passwordConfirmVerified ? (
          <button className={s.cta} type="submit">
            회원가입
          </button>
        ) : (
          <button className={s.ctaDisabled} type="submit" disabled={true}>
            회원가입
          </button>
        )}
      </form>
      <SignFooter sentence="다른 방식으로 가입하기" />
    </div>
  );
};

export default SignUpForm;
