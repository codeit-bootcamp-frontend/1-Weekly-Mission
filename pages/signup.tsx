import Logo from "../components/Logo/Logo";
import styles from "@/styles/sign.module.css";
import Button from "../components/Button/Button";
import { FormEvent, useEffect } from "react";
import useInputController from "@/hooks/useInputController";
import { useRouter } from "next/router";
import Input from "@/components/Input/Input";
import postSign from "@/API/postSign";
import SignFooter from "@/components/SignFooter/SignFooter";
import SignLink from "@/components/SignLink/SignLink";
import Head from "next/head";
import { signupEmail, signupPassword, signupPasswordCheck } from "@/businessLogic/signError";
import useAuth from "@/hooks/useAuth";

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

  const auth = useAuth({ email, password, signType: "up" });

  const signInputConfig = [
    {
      id: "signinEmail",
      name: "email",
      type: "email",
      label: "이메일",

      ...email,
      eyeButton: false,
    },
    {
      id: "signinPassword",
      name: "password",
      type: "password",
      label: "비밀번호",

      ...password,
    },
    {
      id: "signupPasswordCheck",
      name: "passwordCheck",
      type: "password",
      label: "비밀번호 확인",

      ...passwordCheck,
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
            <form className={styles.form} onSubmit={auth.handleSubmit} noValidate>
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
