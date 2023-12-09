import styles from "@/pages/signup.module.css";
import logo from "@/public/img/png/Linkbrary.png";
import google from "@/public/img/png/Component 2.png";
import kakao from "@/public/img/png/Component 3.png";
import Input from "@/components/Input";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { API_URL } from "@/config/apiUrl";

const Signup = () => {
  const router = useRouter();
  const [reCheck, setReCheck] = useState("");
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    passwordCh: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    if (name === "email") {
      setInputValue({ ...inputValue, email: value });
    } else if (name === "password") {
      setInputValue({ ...inputValue, password: value });
    } else {
      setInputValue({ ...inputValue, passwordCh: value });
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = inputValue;
    if (email && password) {
      try {
        const res = await fetch(`${API_URL}sign-up`, {
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
          throw new Error("회원가입 실패");
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
    password: inputValue.password,
  };
  return (
    <div className={styles.join}>
      <div className={styles.joinForm}>
        <h1 className={styles.joinFormH1}>
          <Link href="/" className={styles.joinFormH1A}>
            <Image className={styles.joinFormH1Img} src={logo} alt="logo" />
          </Link>
        </h1>
        <div className={styles.loginLink}>
          <h3 className={styles.loginLinkH3}>이미 회원이신가요?</h3>
          <Link className={styles.loginLinkA} href="/signin">
            로그인 하기
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
          <div className={styles.inputBox}>
            <label className={styles.inputBoxLabel} htmlFor="password-check">
              비밀번호 확인
            </label>
            <Input type={"passwordCheck"} {...inputProps} />
          </div>
          <button className={styles.joinBtn} type="submit">
            회원가입
          </button>
        </form>
        <div className={styles.joinFormSocial}>
          <h3 className={styles.joinFormSocialH3}>다른 방식으로 가입하기</h3>
          <Link
            className={styles.joinFormSocialA}
            href="https://www.google.com/"
          >
            <Image src={google} alt="구글 로그인 이미지" />
          </Link>
          <Link
            className={styles.joinFormSocialA}
            href="https://www.kakaocorp.com/page/"
          >
            <Image
              className={styles.joinFormSocialImg}
              src={kakao}
              alt="카카오톡 로그인 이미지"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
