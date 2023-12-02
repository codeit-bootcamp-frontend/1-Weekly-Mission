import Logo from "../components/Logo/Logo";
import styles from "@/styles/sign.module.css";
import Button from "../components/Button/Button";
import { FormEvent, useEffect, useState } from "react";
import useInputController from "@/hooks/useInputController";
import { useRouter } from "next/router";
import Input from "@/components/Input/Input";
import postSign from "@/API/postSign";
import SignFooter from "@/components/SignFooter/SignFooter";
import SignLink from "@/components/SignLink/SignLink";
import Head from "next/head";
import { signupEmail, signupPassword, signupPasswordCheck } from "@/businessLogic/signError";

function Signin() {
  const email = useInputController({ func: signupEmail });
  const password = useInputController({ func: signupPassword });
  const passwordCheck = useInputController({ func: signupPasswordCheck });

  const router = useRouter();

  useEffect(() => {
    (() => {
      if (localStorage.getItem("accessToken")) {
        return router.push("/folder");
      }
    })();
  }, [router]);

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
    {
      id: "signupPasswordCheck",
      name: "passwordCheck",
      type: "password",
      value: `${passwordCheck.values}`,
      label: "비밀번호 확인",

      errorText: passwordCheck.errorText,

      onChange: passwordCheck.handleChange,
      onBlur: passwordCheck.handleBlur,
      onFocus: passwordCheck.handleFocus,
      eyeButton: true,
    },
  ];

  return (
    <>
      <Head>
        <title>Linkbrary : 로그인</title>
      </Head>
      <main className={styles.root}>
        <div className={styles.container}>
          <header className={styles.header}>
            <Logo className={styles.logo} />

            <SignLink to="/signin" subtitle="이미 회원이신가요?">
              로그인 하기
            </SignLink>
          </header>

          <section className={styles.sign}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              {signInputConfig.map((SignInputs) => {
                return <Input {...SignInputs} key={SignInputs.name} />;
              })}

              <Button className={styles.button}>회원가입</Button>
            </form>
          </section>

          <SignFooter>다른 방식으로 가입하기</SignFooter>
        </div>
      </main>
    </>
  );
}

export default Signin;
