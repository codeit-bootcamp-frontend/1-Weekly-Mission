/*회원가입 폼 컴포넌트 */

import { AxiosError } from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";

import { getEmailCheck, getSignUp } from "@/api/getAuthApi";
import { SignupFormType } from "@/types/FormType";
import { emailReg, passwordReg } from "@/utils/checkReg";
import { setCookie } from "@/utils/manageCookie";

import styles from "./SignForm.module.scss";

export default function SignupForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    getValues,
  } = useForm<SignupFormType>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      passwordRepeat: "",
    },
  });

  const router = useRouter();
  const [viewPassword, setViewPassword] = useState(false);
  const [viewPasswordRepeat, setViewPasswordRepeat] = useState(false);

  // 회원가입 폼을 보내는 mutate 함수
  const { mutate: signupMutate } = useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      getSignUp(data.email, data.password),
    onError: () => {
      toast.error("회원가입에 실패했습니다!");
    },
    onSuccess: (response) => {
      setCookie("accessToken", response.data.accessToken, {
        path: "/",
        secure: "/",
      });
      setCookie("refreshToken", response.data.refreshToken, {
        path: "/",
        secure: "/",
      });
      router.push("/folders");
    },
  });

  // 이메일 중복체크 post를 보내는 mutate 함수.
  const { mutate: emailCheckMutate } = useMutation({
    mutationFn: (email: string) => getEmailCheck(email),
    onError: (error: AxiosError) => {
      if (error?.response?.status === 409) {
        setError(
          "email",
          { message: "중복된 이메일입니다." },
          { shouldFocus: true },
        );
      } else {
        toast.error("회원가입에 실패했습니다!");
      }
    },
    onSuccess: () => {
      const emailValue = getValues("email");
      const passwordValue = getValues("password");
      signupMutate({ email: emailValue, password: passwordValue });
    },
  });

  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  const handleViewPasswordRepeat = () => {
    setViewPasswordRepeat(!viewPasswordRepeat);
  };

  const clickSubmitButton: SubmitHandler<SignupFormType> = () => {
    const emailValue = getValues("email");
    emailCheckMutate(emailValue);
  };

  return (
    <form className={styles["form"]} onSubmit={handleSubmit(clickSubmitButton)}>
      <div
        className={styles["input-container"]}
        data-errorborder={errors.email ? true : false}
      >
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="text"
          placeholder="이메일을 입력해주세요."
          {...register("email", {
            required: "이메일을 입력해주세요.",
            pattern: {
              value: emailReg,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })}
        />
        {errors.email && (
          <p className={styles["error-message"]}>{errors.email.message}</p>
        )}
      </div>

      <div
        className={styles["input-container"]}
        data-errorborder={errors.password ? true : false}
      >
        <button
          className={styles["password-img"]}
          onClick={handleViewPassword}
          type="button"
        >
          <Image
            src={viewPassword ? "icons/eye-open.svg" : "icons/eye-close.svg"}
            alt="eye"
            width={16}
            height={16}
          />
        </button>
        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type={viewPassword ? "text" : "password"}
          placeholder="비밀번호를 입력해주세요."
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            pattern: {
              value: passwordReg,
              message: "비밀번호 형식에 맞지 않습니다.",
            },
          })}
        />
        {errors.password && (
          <p className={styles["error-message"]}>{errors.password.message}</p>
        )}
      </div>

      <div
        className={styles["input-container"]}
        data-errorborder={errors.passwordRepeat ? true : false}
      >
        <button
          className={styles["password-img"]}
          onClick={handleViewPasswordRepeat}
          type="button"
        >
          <Image
            src={
              viewPasswordRepeat ? "icons/eye-open.svg" : "icons/eye-close.svg"
            }
            alt="eye"
            width={16}
            height={16}
          />
        </button>
        <label htmlFor="passwordRepeat">비밀번호 확인</label>
        <input
          id="passwordRepeat"
          type={viewPasswordRepeat ? "text" : "password"}
          placeholder="비밀번호를 다시 입력해주세요."
          {...register("passwordRepeat", {
            validate: {
              check: () => {
                if (getValues("password") !== getValues("passwordRepeat")) {
                  return "비밀번호가 일치하지 않습니다.";
                }
              },
            },
          })}
        />
        {errors.passwordRepeat && (
          <p className={styles["error-message"]}>
            {errors.passwordRepeat.message}
          </p>
        )}
      </div>

      <button className={styles["button"]}>회원가입</button>
    </form>
  );
}
