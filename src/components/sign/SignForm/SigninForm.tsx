/*로그인 폼 컴포넌트 */

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Image from "next/image";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";

import getSignin from "@/api/getSignin";
import { SigninFormType } from "@/types/FormType";
import { emailReg } from "@/utils/checkReg";
import { setCookie } from "@/utils/manageCookie";

import styles from "./SignForm.module.scss";

export default function SigninForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<SigninFormType>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const [viewPassword, setViewPassword] = useState(false);

  // 로그인 폼을 보내는 mutate 함수
  const { mutate: signinMutate } = useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      getSignin(data.email, data.password),
    onError: () => {
      toast.error("로그인에 실패했습니다!");
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

  const handleViewPassword = () => {
    setViewPassword(!viewPassword);
  };

  const clickSubmitButton: SubmitHandler<SigninFormType> = () => {
    const emailValue = getValues("email");
    const passwordValue = getValues("password");
    signinMutate({ email: emailValue, password: passwordValue });
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
          })}
        />
        {errors.password && (
          <p className={styles["error-message"]}>{errors.password.message}</p>
        )}
      </div>
      <button className={styles["button"]}>로그인</button>
    </form>
  );
}
