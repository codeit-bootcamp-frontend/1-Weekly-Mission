import Logo from "../components/Logo/Logo";
import styles from "./sign.module.css";
import SignFooter from "../components/SignFooter/SignFooter";
import SignLink from "../components/SignLink/SignLink";
import SignInput from "../components/SignInput/SignInput";
import Button from "../components/Button/Button";
import { Navigate, useNavigate } from "react-router";
import postSign from "../apis/auth/postSign";
import useAuth from "../hooks/useAuth";
import { signinEmail, signinPassword } from "../utils/signError";
import useInputController from "../hooks/useInputController";
import { FormEvent } from "react";

function Signin() {
  const email = useInputController(signinEmail);
  const password = useInputController(signinPassword);

  const { isAuth } = useAuth();

  const navigate = useNavigate();

  if (isAuth()) {
    return <Navigate to="/folder" />;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      email: email.values,
      password: password.values,
    };

    const response = await postSign("in", data);

    if (response.ok) {
      navigate("/folder");
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
      eyes: false,
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
      eyes: true,
    },
  ];

  return (
    <main className={styles.root}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Logo className={styles.logo} />

          <SignLink to="/signup" subtitle="회원이 아니신가요?" children="회원 가입하기" />
        </header>

        <section className={styles.sign}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {signInputConfig.map((SignInputs) => {
              return <SignInput {...SignInputs} key={SignInputs.name} />;
            })}

            <Button className={styles.button}>로그인</Button>
          </form>
        </section>

        <SignFooter>소셜 로그인</SignFooter>
      </div>
    </main>
  );
}

export default Signin;
