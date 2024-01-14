import { signupEmail, signupPassword, signupPasswordCheck } from "@/business/sign/signError";
import { FormEvent } from "react";
import Head from "next/head";
import SignFooter from "../signin/components/SignFooter/SignFooter";
import SignLink from "../signin/components/SignLink/SignLink";
import styles from "@/pages/signin/sign.module.css";

import useInput from "@/hooks/useInput";
import useForm from "@/hooks/useForm";
import Logo from "@/components/Logo/Logo";
import Button from "@/components/Button/Button";
import Input from "@/components/input/Input";
import InputWrapper from "@/components/input/InputWrapper";

function Signin() {
  const email = useInput({
    errorConfig: { func: signupEmail },
    inputConfig: { id: "email", name: "email", type: "email", eyeButton: false },
    titleConfig: { title: "이메일" },
  });
  const password = useInput({
    errorConfig: { func: signupPassword },
    inputConfig: { id: "password", name: "password", type: "password", eyeButton: true },
    titleConfig: { title: "비밀번호" },
  });
  const passwordCheck = useInput({
    errorConfig: { func: signupPasswordCheck },
    inputConfig: { id: "passwordCheck", name: "passwordCheck", type: "password", eyeButton: true },
    titleConfig: { title: "비밀번호" },
  });

  const signConfig = [email, password, passwordCheck];

  const signMutation = useForm({ email, password, type: "up" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    signMutation.mutate();
  };

  return (
    <>
      <Head>
        <title>Linkbrary : 회원가입</title>
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
              {signConfig?.map((item) => {
                return (
                  <InputWrapper key={item.input.name} {...item.wrapper}>
                    <Input {...item.input} />
                  </InputWrapper>
                );
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
