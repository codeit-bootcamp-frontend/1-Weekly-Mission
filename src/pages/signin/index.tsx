import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Input, SignLayout } from "@/components/sign";
import { useInputValid } from "@/hooks";
import styles from "./SignInPage.module.scss";
import { useAuth } from "@/contexts/AuthProvider";

function SignInPage() {
  const router = useRouter();
  const { inputValue, onChange, hasError } = useInputValid("signin");
  const [wrongLogin, setWrongLogin] = useState(false);
  const {
    email: emailValue,
    password: passwordValue,
    passwordRepeat: passwordRepeatValue,
  } = inputValue;

  const { user, login } = useAuth();
  const handleSubmitSignin = async (e: FormEvent) => {
    e.preventDefault();
    if (hasError.email.hasError) {
      return;
    }
    try {
      await login(emailValue, passwordValue);
      setWrongLogin(false);
      router.push("/folder");
      console.log("login");
    } catch {
      setWrongLogin(true);
      return;
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/folder");
    }
  }, [user]);

  return (
    <>
      <SignLayout type="signin">
        <form className={styles["form"]} onSubmit={handleSubmitSignin}>
          <Input
            id="email"
            label="이메일"
            type="text"
            placeholder="이메일을 입력해 주세요"
            onChange={onChange}
            value={emailValue}
            hasError={wrongLogin || hasError.email.hasError}
            errorMsg={
              wrongLogin ? "이메일을 확인해 주세요!" : hasError.email.errorMsg
            }
          />

          <Input
            id="password"
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            onChange={onChange}
            value={passwordValue}
            hasError={wrongLogin || hasError.password.hasError}
            errorMsg={
              wrongLogin
                ? "비밀번호를 확인해 주세요!"
                : hasError.password.errorMsg
            }
          />
          <button className={styles["button"]}>로그인</button>
        </form>
      </SignLayout>
    </>
  );
}

export default SignInPage;
