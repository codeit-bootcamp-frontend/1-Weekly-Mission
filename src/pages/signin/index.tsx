import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Input, SignLayout } from "@/components/sign";
import styles from "./SignInPage.module.scss";
import { emailChecker } from "@/utils/checkReg";
import getSignIn from "@/api/getSignin";

function SignInPage() {
  const router = useRouter();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [hasError, setHasError] = useState({
    email: false,
    password: false,
  });
  const [errorMsg, setErrorMsg] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      router.push("/folder");
      console.log("login by token");
    }
  });

  const handleEmailCheck = (id: string) => {
    if (id === "email") {
      if (!emailValue) {
        setHasError((prev) => {
          return { ...prev, [id]: true };
        });
        setErrorMsg((prev) => {
          return { ...prev, [id]: "이메일을 입력해 주세요" };
        });
      } else if (!emailChecker(emailValue)) {
        setHasError((prev) => {
          return { ...prev, [id]: true };
        });
        setErrorMsg((prev) => {
          return { ...prev, [id]: "올바른 이메일 주소가 아닙니다." };
        });
      } else {
        setHasError((prev) => {
          return { ...prev, [id]: false };
        });
        setErrorMsg((prev) => {
          return { ...prev, [id]: "" };
        });
      }
    }
    if (id === "password") {
      if (!passwordValue) {
        setHasError((prev) => {
          return { ...prev, [id]: true };
        });
        setErrorMsg((prev) => {
          return { ...prev, [id]: " 비밀번호를 입력해 주세요" };
        });
      } else {
        setHasError((prev) => {
          return { ...prev, [id]: false };
        });
        setErrorMsg((prev) => {
          return { ...prev, [id]: "" };
        });
      }
    }
  };

  const handleSubmitSignin = async (e: FormEvent) => {
    e.preventDefault();
    const signinResponse = await getSignIn(emailValue, passwordValue);
    if (!signinResponse) {
      setHasError(() => {
        return { email: true, password: true };
      });
      setErrorMsg(() => {
        return {
          email: "이메일을 확인해 주세요",
          password: "비밀번호를 확인해 주세요",
        };
      });
      return;
    } else {
      localStorage.setItem("accessToken", signinResponse.data.accessToken);
      router.push("/folder");
      console.log("login");
    }
  };

  return (
    <>
      <SignLayout type="signin">
        <form className={styles["form"]} onSubmit={handleSubmitSignin}>
          <Input
            id="email"
            label="이메일"
            type="text"
            placeholder="이메일을 입력해 주세요"
            onChange={setEmailValue}
            onBlur={() => {
              handleEmailCheck("email");
            }}
            value={emailValue}
            hasError={hasError.email}
            errorMsg={errorMsg.email}
          />

          <Input
            id="password"
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            onChange={setPasswordValue}
            onBlur={() => {
              handleEmailCheck("password");
            }}
            value={passwordValue}
            hasError={hasError.password}
            errorMsg={errorMsg.password}
          />
          <button className={styles["button"]}>로그인</button>
        </form>
      </SignLayout>
    </>
  );
}

export default SignInPage;
