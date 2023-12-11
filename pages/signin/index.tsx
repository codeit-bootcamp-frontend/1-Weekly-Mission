import React, { useState } from "react";
import styles from "./SignIn.module.css";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import Input from "@/components/input/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import google from "@/public/images/google.png";
import kakao from "@/public/images/kakao.png";

import { useRouter } from "next/router";
import { FormValues } from "@/components/types/hookFormTypes";
export default function SingInPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>({
    mode: "onBlur",
    criteriaMode: "all",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [isEyeShow, setIsEyeShow] = useState<boolean>(false);
  const [type, setType] = useState<string>("password");

  const watchEmail = watch("email");
  const watchPassword = watch("password");

  const router = useRouter();
  const handleClick = () => {
    setIsEyeShow(!isEyeShow);
    setType((prev) => (prev === "password" ? "text" : "password"));
  };

  const onSubmit: SubmitHandler<FormValues> = async () => {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        accept: "*/*",
      },
      body: JSON.stringify({
        email: watchEmail,
        password: watchPassword,
      }),
    });
    if (response.status === 200) {
      if (localStorage.getItem("myToken")) {
        router.push("/folder");
      } else {
        const jsonData = await response.json();
        const myToken = jsonData.data?.accessToken;
        localStorage.setItem("myToken", JSON.stringify(myToken));
        router.push("/folder");
      }
    } else if (response.status === 400) {
      alert("유효한 auth가 아닙니다");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.link__container}>
        <Image src={logo} alt="logo" />
        <div className={styles.link__container__text}>
          <p>회원이 아니신가요?</p>
          <Link href="/signup" className={styles.link__container__link}>
            회원가입하기
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
          type={type}
          errors={errors}
          label="password"
          name="password"
          register={register}
          placeholder="비밀번호를 입력해 주세요"
          required={{ value: true, message: "비밀번호를 입력해주세요" }}
          onClick={handleClick}
          isEyeShow={isEyeShow}
        />
        <button className={styles.login__button}>로그인</button>
        <div className={styles.social__login}>
          <p>소설로그인</p>
          <div className={styles.social__login__images}>
            <Link href="https://www.google.com">
              <Image src={google} alt="google" />
            </Link>
            <Link href="https://www.kakaocorp.com/page">
              <Image src="@/public/images/kakao.png" alt="kakao" />
            </Link>
          </div>
        </div>
      </form>
      {isSubmitSuccessful && <p>Form이 성공적으로 제출되었습니다</p>}
    </div>
  );
}
