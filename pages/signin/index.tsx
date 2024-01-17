import { signinEmail, signinPassword } from "@/business/sign/signError";
import { FormEvent } from "react";
import Head from "next/head";
import SignLink from "./components/SignLink/SignLink";
import SignFooter from "./components/SignFooter/SignFooter";
import styles from "@/pages/signin/sign.module.css";

import useInput from "@/hooks/useInput";
import useForm from "@/hooks/useForm";
import Logo from "@/components/Logo/Logo";
import Button from "@/components/Button/Button";
import Input from "@/components/input/Input";
import InputWrapper from "@/components/input/InputWrapper";

function Signin() {
  const email = useInput({
    errorConfig: { func: signinEmail },
    inputConfig: { id: "email", name: "email", type: "email", eyeButton: false },
    titleConfig: { title: "이메일" },
  });
  const password = useInput({
    errorConfig: { func: signinPassword },
    inputConfig: { id: "password", name: "password", type: "password", eyeButton: true },
    titleConfig: { title: "비밀번호" },
  });

  const signConfig = [email, password];

  const signMutation = useForm({ email, password, type: "in" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    signMutation.mutate();
  };

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
              {signConfig?.map((item) => {
                return (
                  <InputWrapper key={item.input.name} {...item.wrapper}>
                    <Input {...item.input} />
                  </InputWrapper>
                );
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
