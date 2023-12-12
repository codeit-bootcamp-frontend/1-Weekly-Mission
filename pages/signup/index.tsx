import React, { useState, useEffect } from "react";
import styles from "./SignUp.module.css";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import Input from "@/components/input/Input";
import { useForm, FormProvider } from "react-hook-form";
import google from "@/public/images/google.png";
import kakao from "@/public/images/kakao.png";
import { useRouter } from "next/router";
import {
  FormValues,
  PASSWORD,
  FORMVALUEOBJECT,
} from "@/components/types/hookFormTypes";
export default function SingUpPage() {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>({
    mode: "all",
    criteriaMode: "all",
    defaultValues: {
      email: "",
      password: "",
      repassword: "",
    },
  });

  const [isEyeShow, setIsEyeShow] = useState<boolean>(false);
  const [isReEyeShow, setIsReEyeShow] = useState<boolean>(false);
  const [passwordType, setPasswordType] = useState<PASSWORD>("password");
  const [repasswordType, setRepasswordType] = useState<PASSWORD>("password");

  const watchEmail = watch<FORMVALUEOBJECT>("email");
  const watchPassword = watch<FORMVALUEOBJECT>("password");
  const watchRePassword = watch<FORMVALUEOBJECT>("repassword");

  const router = useRouter();
  const handlePassWordClick = () => {
    setIsEyeShow(!isEyeShow);
    setPasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  const handleRePassWordClick = () => {
    setIsReEyeShow(!isReEyeShow);
    setRepasswordType((prevType) =>
      prevType === "password" ? "text" : "password"
    );
  };

  useEffect(() => {});
  const onSubmit = async () => {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-up", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
      },
      body: JSON.stringify({
        email: watchEmail,
        password: watchPassword,
        repassword: watchRePassword,
      }),
    });
    if (response.status === 200) {
      if (localStorage.getItem("myToken")) {
        router.push("/folder");
      } else {
        const jsonData = await response.json();
        const myToken = jsonData.data?.accessToken;
        localStorage.setItem("myToken", JSON.stringify(myToken));
        alert("회원가입이되었습니다");
      }
    } else if (response.status === 400) {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/check-email",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            accept: "*/*",
          },
          body: JSON.stringify({
            email: watchEmail,
          }),
        }
      );
      const jsonData = await response.json();
      alert(jsonData.error.message);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className={styles.container}>
        <div className={styles.link__container}>
          <Image src={logo} alt="logo" />
          <div className={styles.link__container__text}>
            <p>이미 회원이신가요?</p>
            <Link href="/signin" className={styles.link__container__link}>
              로그인하기
            </Link>
          </div>
        </div>

        <form
          className={styles.form__container}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type="text"
            errors={errors}
            label="email"
            name="email"
            register={register}
            placeholder="이메일을 입력해 주세요"
            required={{ value: true, message: "이메일을 입력해 주세요" }}
            minLength={{ value: 3, message: "최소 3글자를 입력해주세요" }}
            pattern={{
              value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/gm,
              message: "유효한 이메일이 아닙니다",
            }}
          />
          <Input
            type={passwordType}
            errors={errors}
            label="password"
            name="password"
            register={register}
            placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요"
            required={{ value: true, message: "비밀번호를 입력해주세요" }}
            pattern={{
              value: /^(?=.*\d)(?=.*[a-zA-Z]).{3,}$/gm,
              message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요",
            }}
            isEyeShow={isEyeShow}
            onClick={handlePassWordClick}
          />
          <Input
            type={repasswordType}
            errors={errors}
            label="repassword"
            name="repassword"
            register={register}
            placeholder="비밀번호와 일치하는 값을 입력해 주세요"
            required={{ value: true, message: "비밀번호를 입력해주세요" }}
            isReEyeShow={isReEyeShow}
            onClick={handleRePassWordClick}
          />
          {watchRePassword &&
            watchRePassword.length > 0 &&
            watchPassword !== watchRePassword && <p>비밀번호가 맞지않습니다</p>}

          <button className={styles.login__button}>회원가입</button>
          <div className={styles.social__login}>
            <p>다른방식으로 가입하기</p>
            <div className={styles.social__login__images}>
              <Link href="https://www.google.com">
                <Image src={google} alt="google" />
              </Link>
              <Link href="https://www.kakaocorp.com/page">
                <Image src={kakao} alt="kakao" />
              </Link>
            </div>
          </div>
        </form>
        {isSubmitSuccessful && <p>Form이 성공적으로 제출되었습니다</p>}
      </div>
    </FormProvider>
  );
}
