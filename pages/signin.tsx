import Logo from "../components/Logo/Logo";
import styles from "@/styles/sign.module.css";
import Button from "../components/Button/Button";
import { FormEvent, useEffect, useState } from "react";
import useInputController from "@/hooks/useInputController";
import { useRouter } from "next/router";
import Input from "@/components/Input/Input";
import { signinEmail, signinPassword } from "@/businessLogic/signError";
import postSign from "@/API/postSign";
import SignFooter from "@/components/SignFooter/SignFooter";
import SignLink from "@/components/SignLink/SignLink";
import Head from "next/head";

function Signin() {
  const [value, setValue] = useState("");

  const email = useInputController({ func: signinEmail });
  const password = useInputController({ func: signinPassword });

  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") as string;
    setValue(accessToken);
  }, []);

  (() => {
    if (value) {
      return router.push("/folder");
    }
  })(); // useEffect 이후로 다시 랜더링될 때

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      email: email.values,
      password: password.values,
    };

    const {
      response,
      result: {
        data: { accessToken, refreshToken },
      },
    } = await postSign("in", data);

    if (response.ok) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      return router.push("/folder");
    } else {
      email.setErrorText("이메일을 확인해주세요");
      password.setErrorText("비밀번호를 확인해주세요");
    }
  };

  const signInputConfig = [
    {
      id: "signinEmail",
      name: "email",
      type: "email",
      value: `${email.values}`,
      label: "이메일",

      errorText: email.errorText,

      onChange: email.handleChange,
      onBlur: email.handleBlur,
      onFocus: email.handleFocus,
      eyeButton: false,
    },
    {
      id: "signinPassword",
      name: "password",
      type: "password",
      value: `${password.values}`,
      label: "비밀번호",

      errorText: password.errorText,

      onChange: password.handleChange,
      onBlur: password.handleBlur,
      onFocus: password.handleFocus,
      eyeButton: true,
    },
  ];

  if (typeof window === "undefined") {
  }
  return (
    <>
      <Head>
        <title>Linkbrary : 로그인</title>
      </Head>
      <main className={styles.root}>
        <div className={styles.container}>
          <header className={styles.header}>
            <Logo className={styles.logo} />

            <SignLink to="/signup" subtitle="회원이 아니신가요?">
              회원 가입하기
            </SignLink>
          </header>

          <section className={styles.sign}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              {signInputConfig.map((SignInputs) => {
                return <Input {...SignInputs} key={SignInputs.name} />;
              })}

              <Button className={styles.button}>로그인</Button>
            </form>
          </section>

          <SignFooter>소셜 로그인</SignFooter>
        </div>
      </main>
    </>
  );
}

export default Signin;
