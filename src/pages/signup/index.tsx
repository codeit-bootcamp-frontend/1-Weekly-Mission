import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getSignUp, getEmailCheck } from "@/api";
import { Input, SignLayout } from "@/components/sign";
import { useInputValid } from "@/hooks";
import styles from "./SignUpPage.module.scss";

function SignUpPage() {
  const router = useRouter();
  const { inputValue, onChange, hasError } = useInputValid("signup");
  const [isDuplicated, setIsDuplicated] = useState(false);
  const {
    email: emailValue,
    password: passwordValue,
    passwordRepeat: passwordRepeatValue,
  } = inputValue;

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      router.push("/folder");
      console.log("signup by token");
    }
  });

  const handleSubmitSignin = async (e: FormEvent) => {
    e.preventDefault();
    const emailCheckResponse = await getEmailCheck(emailValue);
    if (!emailCheckResponse) {
      // TODO - 공백으로 두고 엔터를 치면 400 에러가 받아와져서 중복된 이메일입니다 메세지가 떠버림 400에러인지 409에러인지에 따라 다르게 처리하는 로직을 짤 것.
      setIsDuplicated(true);
      return;
    }
    setIsDuplicated(false);
    if (passwordValue !== passwordRepeatValue) {
      console.log("blocked");
      return;
    }
    const signupResponse = await getSignUp(emailValue, passwordValue);
    if (!signupResponse) {
      return;
    } else {
      localStorage.setItem("accessToken", signupResponse.data.accessToken);
      router.push("/folder");
      console.log("signup");
      console.log(signupResponse);
    }
  };

  return (
    <>
      <SignLayout type="signup">
        <form className={styles["form"]} onSubmit={handleSubmitSignin}>
          <Input
            id="email"
            label="이메일"
            type="text"
            placeholder="이메일을 입력해 주세요"
            onChange={onChange}
            value={emailValue}
            hasError={isDuplicated || hasError.email.hasError}
            errorMsg={
              isDuplicated ? "중복된 이메일입니다!" : hasError.email.errorMsg
            }
          />

          <Input
            id="password"
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            onChange={onChange}
            value={passwordValue}
            hasError={hasError.password.hasError}
            errorMsg={hasError.password.errorMsg}
          />

          <Input
            id="passwordRepeat"
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호와 일치하는 값을 입력해주세요"
            onChange={onChange}
            value={passwordRepeatValue}
            hasError={hasError.passwordRepeat.hasError}
            errorMsg={hasError.passwordRepeat.errorMsg}
          />

          <button className={styles["button"]}>회원가입</button>
        </form>
      </SignLayout>
    </>
  );
}

export default SignUpPage;
