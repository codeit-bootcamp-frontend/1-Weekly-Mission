import React, { useState } from "react";
import logo from "@/public/img/png/Linkbrary.png";
import google from "@/public/img/png/Component 2.png";
import kakao from "@/public/img/png/Component 3.png";
import Input from "@/components/Input";
import Link from "next/link";
import Image from "next/image";
import styles from "./signin.module.css";
import { API_URL } from "@/config/apiUrl";
import { useRouter } from "next/router";

const Signin = () => {
  const router = useRouter();
  const [reCheck, setReCheck] = useState("");
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email") {
      setInputValue({ ...inputValue, email: value });
    } else if (name === "password") {
      setInputValue({ ...inputValue, password: value });
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = inputValue;
    if (email && password) {
      try {
        const res = await fetch(`${API_URL}sign-in`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputValue),
        });
        if (res.ok) {
          const result = await res.json();
          const { accessToken } = result.data;
          window.localStorage.setItem("user", accessToken);
          alert("환영합니다.");
          router.push("/folder");
        } else {
          throw new Error("로그인 실패");
        }
      } catch {
        setReCheck("disaccord");
      }
    } else {
      setReCheck("disaccord");
    }
  };

  const inputProps = {
    onChange,
    reCheck,
    setReCheck,
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginForm}>
        <h1 className={styles.loginFormH1}>
          <Link href="/" className={styles.loginFormH1A}>
            <Image className={styles.loginFormH1Img} src={logo} alt="logo" />
          </Link>
        </h1>
        <div className={styles.joinLink}>
          <h3 className={styles.joinLinkH3}>회원이 아니신가요?</h3>
          <Link href="/signup" className={styles.joinLinkA}>
            회원 가입하기
          </Link>
        </div>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.inputBox}>
            <label className={styles.inputBoxLabel} htmlFor="email">
              이메일
            </label>
            <Input type={"email"} {...inputProps} />
          </div>
          <div className={styles.inputBox}>
            <label className={styles.inputBoxLabel} htmlFor="password">
              비밀번호
            </label>
            <Input type={"password"} {...inputProps} />
          </div>
          <button className={styles.loginBtn} type="submit">
            로그인
          </button>
        </form>
        <div className={styles.loginFormSocial}>
          <h3 className={styles.loginFormSocialH3}>소셜 로그인</h3>
          <Link
            className={styles.loginFormSocialA}
            href="https://www.google.com/"
          >
            <Image
              className={styles.loginFormSocialImg}
              src={google}
              alt="구글 로그인 이미지"
            />
          </Link>
          <Link
            className={styles.loginFormSocialA}
            href="https://www.kakaocorp.com/page/"
          >
            <Image
              className={styles.loginFormSocialImg}
              src={kakao}
              alt="카카오톡 로그인 이미지"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
