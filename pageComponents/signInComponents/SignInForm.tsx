import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import s from "./SignInForm.module.css";
import SignFooter from "@/components/SignFooter";
import { useRouter } from "next/navigation";
import { EMAIL_REGEX } from "@/consts/RegExp";
import getStatus from "@/libs/getStatus";

interface SignInFormInput {
  email: string;
  password: string;
}

const SignInForm = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<SignInFormInput>();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        router.push("/folder");
      }
    }
  }, []);

  const onSubmit: SubmitHandler<SignInFormInput> = async (data) => {
    const result = await getStatus(data.email, "/sign-in", data.password);
    if (result.status !== 200) {
      setEmailErrorMessage("이메일을 확인해주세요.");
      setPasswordErrorMessage("비밀번호를 확인해주세요.");
    } else {
      const accessToken = result?.data?.data?.accessToken;
      // const refreshToken = result?.data?.data?.refreshToken;
      // localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("accessToken", accessToken);
      router.push("/folder");
    }
  };

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [eyeImgClicked, setEyeImgClicked] = useState(false);

  function handleEyeImgClick() {
    setEyeImgClicked(!eyeImgClicked);
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

  function handleEmailOnBlur(event: React.FocusEvent<HTMLInputElement>) {
    const inputValue = event.target.value;

    if (inputValue !== "" && !EMAIL_REGEX.test(inputValue)) {
      event.target.classList.add(s.signInputOnBlur);
      setEmailErrorMessage("올바른 이메일 주소가 아닙니다.");
    } else if (inputValue === "") {
      event.target.classList.add(s.signInputOnBlur);
      setEmailErrorMessage("이메일을 입력해 주세요.");
    } else {
      event.target.classList.remove(s.signInputOnBlur);
      setEmailErrorMessage("");
    }
  }
  function handlePasswordOnBlur(event: React.FocusEvent<HTMLInputElement>) {
    const inputValue = event.target.value;

    if (inputValue === "") {
      event.target.classList.add(s.signInputOnBlur);
      setPasswordErrorMessage("비밀번호를 입력해 주세요.");
    } else {
      event.target.classList.remove(s.signInputOnBlur);
      setPasswordErrorMessage("");
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
              placeholder="비밀번호를 입력해 주세요."
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
        </div>
        <button className={s.cta} type="submit">
          로그인
        </button>
      </form>
      <SignFooter sentence="소셜 로그인" />
    </div>
  );
};

export default SignInForm;
