import Logo from "../components/Logo/Logo";
import styles from "./sign.module.css";
import SignFooter from "../components/SignFooter/SignFooter";
import SignLink from "../components/SignLink/SignLink";
import SignInput from "../components/SignInput/SignInput";
import Button from "../components/Button/Button";
import { Navigate, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import postSign from "../apis/auth/postSign";
import { signupEmail, signupPassword } from "../utils/signError";
import useInputController from "../hooks/useInputController";
import { FormEvent } from "react";

function Signup() {
  const { isAuth } = useAuth();

  const email = useInputController(signupEmail);
  const password = useInputController(signupPassword);
  const passwordCheck = useInputController(signupPassword);

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

    const response = await postSign("up", data);

    if (response.ok) {
      navigate("/folder");
    } else {
      email.setErrorText("이메일을 확인해주세요");
      password.setErrorText("비밀번호를 확인해주세요");
      passwordCheck.setErrorText("");
    }
  };

  const signInputConfig = [
    {
      id: "signupEmail",
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
      id: "signupPassword",
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
      eyes: true,
    },
  ];

  return (
    <main className={styles.root}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Logo className={styles.logo} />

          <SignLink to="/signin" subtitle="이미 회원이신가요?" children="로그인 하기" />
        </header>

        <section className={styles.sign}>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {signInputConfig.map((SignInputs) => {
              return <SignInput {...SignInputs} key={SignInputs.name} />;
            })}

            <Button className={styles.button}>회원가입</Button>
          </form>
        </section>

        <SignFooter>다른 방식으로 가입하기</SignFooter>
      </div>
    </main>
  );
}

export default Signup;
