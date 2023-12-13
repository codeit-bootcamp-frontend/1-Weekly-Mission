import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import { FieldValues, useForm } from "react-hook-form";

import Button from "@/components/Button/Button";

import logoIcon from "@/assets/images/logo.svg";
import Input from "@/components/Input/Input";
import Link from "next/link";
import kakaoTalkIcon from "@/assets/images/kakaoTalkIcon.svg";
import googleIcon from "@/assets/images/google.svg";

import getSignIn from "@/api/getSignIn";
import validateField from "@/utils/validateField";
import { emailFieldInfo, passwordFieldInfo } from "@/constants/constants";

import styles from "@/assets/styles/signPage.module.css";

// 타입을 뭘로 해야할까...

function SignIn() {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FieldValues) => {
    const { email, password } = data;
    if (!email) {
      setError("email", {
        message: "이메일을 입력해주세요.",
      });
    }

    if (!password) {
      setError("password", {
        message: "비밀번호를 입력해주세요.",
      });
    }

    if (!email || !password) {
      return;
    }

    const result = await getSignIn(data.email, data.password);

    if (!result) {
      setError("email", {
        message: "이메일을 확인해주세요.",
      });
      setError("password", {
        message: "비밀번호를 확인해주세요.",
      });

      return;
    }

    const { accessToken, refreshToken } = result.data;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    router.push("/folder");
  };

  const validateEmail = (email: string) => {
    const { fieldName, regex, errorMessageEmpty, errorMessageInvalid } =
      emailFieldInfo;

    validateField({
      setError,
      fieldName,
      value: email,
      regex,
      errorMessageEmpty,
      errorMessageInvalid,
    });
  };

  const validatePassword = (password: string) => {
    const { fieldName, errorMessageEmpty } = passwordFieldInfo.signIn;

    validateField({
      setError,
      fieldName,
      value: password,
      errorMessageEmpty,
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        router.push("/folder");
      }
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>SignIn - LinkBrary</title>
      </Head>
      <main className={styles.mainContainer}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.headerContainer}>
            <Link href={"/"}>
              <Image src={logoIcon} height={38} alt="로고" />
            </Link>
            <div className={styles.descriptionContainer}>
              <p className={styles.description}>회원이 아니신가요?</p>
              <Link className={styles.descriptionLink} href={"/signup"}>
                회원 가입하기
              </Link>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <Input
              label="이메일"
              name="email"
              register={register}
              errors={errors}
              onValidate={validateEmail}
            />
            <Input
              label="비밀번호"
              name="password"
              register={register}
              errors={errors}
              onValidate={validatePassword}
              isPassword
            />
          </div>
          <Button size={40}>로그인</Button>
        </form>
        <div className={styles.socialContainer}>
          <p className={styles.socialDescription}>소셜 로그인</p>
          <div className={styles.socialButtons}>
            <Link
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={googleIcon} alt="구글 로그인" />
            </Link>
            <Link
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={kakaoTalkIcon} alt="카카오 로그인" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default SignIn;
