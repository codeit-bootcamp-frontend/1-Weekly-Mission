import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { FieldValues, useForm } from "react-hook-form";

import Button from "@/components/Button/Button";

import logoIcon from "@/assets/images/logo.svg";
import Input from "@/components/Input/Input";
import Link from "next/link";
import kakaoTalkIcon from "@/assets/images/kakaoTalkIcon.svg";
import googleIcon from "@/assets/images/google.svg";

import getSignUp from "@/api/getSignUp";
import getUsableEmail from "@/api/getUsableEmail";
import validateField from "@/utils/validateField";
import { emailFieldInfo, passwordFieldInfo } from "@/constants/constants";

import styles from "@/assets/styles/signPage.module.css";

function SignUp() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setError,
    getValues,
  } = useForm<FieldValues>();
  const router = useRouter();

  const isUsableEmail = async (email: string): Promise<boolean> => {
    const result = await getUsableEmail(email);
    const isUsableEmail = result?.data?.isUsableNickname;

    if (!isUsableEmail) {
      setError("email", { message: "중복된 이메일입니다." });
      return false;
    }
    return true;
  };

  const onSubmit = async (data: FieldValues) => {
    const { email, password, rePassword } = data;

    if (!email) {
      setError("email", { message: "이메일을 입력해주세요." });
    }

    if (!password) {
      setError("password", { message: "비밀번호를 입력해주세요." });
    }

    if (!rePassword) {
      setError("rePassword", { message: "비밀번호 확인을 입력해주세요." });
    }

    if (!email && !password && !rePassword) return;

    if (password !== rePassword) {
      setError("rePassword", { message: "비밀번호가 다릅니다." });
      return;
    }

    if (!isUsableEmail(data.email)) return;

    const result = await getSignUp(data.email, data.password);

    if (!result) {
      setError("email", {
        message: "이메일을 확인해주세요.",
      });
      setError("password", {
        message: "비밀번호를 확인해주세요.",
      });
      setError("rePassword", {
        message: "비밀번호 확인을 확인해주세요.",
      });

      return;
    }

    const { accessToken, refreshToken } = result.data;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    router.push("/folder");
  };

  const validateEmail = async (email: string) => {
    const { fieldName, regex, errorMessageEmpty, errorMessageInvalid } =
      emailFieldInfo;

    const validateResult = validateField({
      setError,
      fieldName,
      value: email,
      regex,
      errorMessageEmpty,
      errorMessageInvalid,
    });

    if (!validateResult) return;

    if (!isUsableEmail(email)) return;
  };

  const validatePassword = (password: string) => {
    const { fieldName, regex, errorMessageEmpty, errorMessageInvalid } =
      passwordFieldInfo.signUp;

    validateField({
      setError,
      fieldName,
      value: password,
      regex,
      errorMessageEmpty,
      errorMessageInvalid,
    });
  };

  const validateRePassword = (value: string) => {
    const password = getValues("password");

    if (value !== password) {
      setError("rePassword", { message: "비밀번호가 다릅니다." });
      return;
    }
    setError("rePassword", { message: "" });
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      router.push("/folder");
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>SignUp - LinkBrary</title>
      </Head>
      <main className={styles.mainContainer}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.headerContainer}>
            <Link href={"/"}>
              <Image src={logoIcon} height={38} alt="로고" />
            </Link>
            <div className={styles.descriptionContainer}>
              <p className={styles.description}>이미 회원이신가요?</p>
              <Link className={styles.descriptionLink} href={"/signin"}>
                로그인 하기
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
            <Input
              label="비밀번호 확인"
              name="rePassword"
              register={register}
              errors={errors}
              onValidate={validateRePassword}
              isPassword
            />
          </div>
          <Button size={40}>로그인</Button>
        </form>
        <div className={styles.socialContainer}>
          <p className={styles.socialDescription}>다른 방식으로 가입하기</p>
          <div className={styles.socialButtons}>
            <Image src={googleIcon} alt="구글 로그인" />
            <Image src={kakaoTalkIcon} alt="카카오 로그인" />
          </div>
        </div>
      </main>
    </>
  );
}

export default SignUp;
