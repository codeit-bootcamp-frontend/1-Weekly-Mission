import Logo from "../components/Logo/Logo";
import styles from "@/styles/sign.module.css";
import Button from "../components/Button/Button";
import { useEffect, useState } from "react";
import useInputController from "@/hooks/useInputController";
import { useRouter } from "next/router";
import Input from "@/components/Input/Input";
import { signinEmail, signinPassword } from "@/businessLogic/signError";
import SignFooter from "@/components/SignFooter/SignFooter";
import SignLink from "@/components/SignLink/SignLink";
import Head from "next/head";
import useAuth from "@/hooks/useAuth";

function Signin() {
  const [value, setValue] = useState("");

  const email = useInputController({ func: signinEmail });
  const password = useInputController({ func: signinPassword });

  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken") as string;
    setValue(accessToken);
  }, []);

  (() => {
    if (value) {
      return router.push("/folder");
    }
  })(); // useEffect 이후로 다시 랜더링될 때

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

            <SignLink to="/signup" subtitle="회원이 아니신가요?">
              회원 가입하기
            </SignLink>
          </header>

          <section className={styles.sign}>
            <form
              className={styles.form}
              onSubmit={auth.handleSubmit({ email, password, signType: "in", router })}
              noValidate
            >
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
