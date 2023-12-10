import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Input, SignLayout } from "@/components/sign";
import styles from "./SignUpPage.module.scss";
import { emailChecker, pswChecker } from "@/utils/checkReg";
import getSignUp from "@/api/getSignUp";
import getEmailCheck from "@/api/getEmailCheck";

function SignUpPage() {
  const router = useRouter();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordRepeatValue, setPasswordRepeatValue] = useState("");
  const [hasError, setHasError] = useState({
    email: false,
    password: false,
    passwordRepeat: false,
  });
  const [errorMsg, setErrorMsg] = useState({
    email: "",
    password: "",
    passwordRepeat: "",
  });

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      router.push("/folder");
      console.log("signup by token");
    }
  });
  const handleCheck = (id: string) => {
    if (id === "email") {
      if (!emailChecker(emailValue)) {
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
      if (!pswChecker(passwordValue)) {
        setHasError((prev) => {
          return { ...prev, [id]: true };
        });
        setErrorMsg((prev) => {
          return {
            ...prev,
            [id]: "값이 8자미만이거나 문자열만 있거나 숫자만 있을 경우 “비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요",
          };
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
    if (id === "passwordRepeat") {
      if (passwordValue !== passwordRepeatValue) {
        setHasError((prev) => {
          return { ...prev, [id]: true };
        });
        setErrorMsg((prev) => {
          return { ...prev, [id]: "비밀번호가 일치하지 않아요." };
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

  const handleBlur = (id: string) => {
    if (id === "email") {
      if (!emailValue) {
        setHasError((prev) => {
          return { ...prev, [id]: true };
        });
        setErrorMsg((prev) => {
          return { ...prev, [id]: "이메일을 입력해 주세요" };
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
    if (id === "passwordRepeat") {
      if (!passwordValue) {
        setHasError((prev) => {
          return { ...prev, [id]: true };
        });
        setErrorMsg((prev) => {
          return { ...prev, [id]: " 비밀번호를 확인해 주세요" };
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
    handleCheck("email");
    handleCheck("password");
    handleCheck("passwordRepeat");
    const emailCheckResponse = await getEmailCheck(emailValue);
    if (!emailCheckResponse) {
      setHasError((prev) => {
        return { ...prev, email: true };
      });
      setErrorMsg((prev) => {
        return { ...prev, email: "중복되는 이메일입니다." };
      });
      return;
    }
    if (hasError.email || hasError.password || hasError.passwordRepeat) {
      console.log("blocked");
      return;
    }
    if (passwordRepeatValue === passwordValue) {
      const signupResponse = await getSignUp(emailValue, passwordValue);
      if (!signupResponse) {
        return;
      } else {
        localStorage.setItem("accessToken", signupResponse.data.accessToken);
        router.push("/folder");
        console.log("signup");
        console.log(signupResponse);
      }
    } else {
      return;
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
            onChange={setEmailValue}
            onCheck={handleCheck}
            onBlur={() => {
              handleBlur("email");
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
              handleBlur("password");
            }}
            onCheck={handleCheck}
            value={passwordValue}
            hasError={hasError.password}
            errorMsg={errorMsg.password}
          />

          <Input
            id="passwordRepeat"
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호와 일치하는 값을 입력해주세요"
            onChange={setPasswordRepeatValue}
            onBlur={() => {
              handleBlur("passwordRepeat");
            }}
            onCheck={handleCheck}
            value={passwordRepeatValue}
            hasError={hasError.passwordRepeat}
            errorMsg={errorMsg.passwordRepeat}
          />

          <button className={styles["button"]}>회원가입</button>
        </form>
      </SignLayout>
    </>
  );
}

export default SignUpPage;
