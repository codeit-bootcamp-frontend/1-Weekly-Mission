import AuthInputs from "@/components/authInput/AuthInput";
import { VALIDATE } from "@/constants/constants";
import AuthLayout from "@/layouts/authLayout/AuthLayout";
import { axiosInstance } from "@/utils/axiosInstance";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface SignUpProps {
  email: string;
  password: string;
  passwordCheck: string;
}

const SignUp = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setError,
  } = useForm<SignUpProps>({ mode: "onBlur", reValidateMode: "onBlur" });

  const emailRegister = register("email", {
    required: {
      value: true,
      message: "이메일을 입력해 주세요.",
    },
    pattern: {
      value: VALIDATE.userEmail,
      message: "올바른 이메일 주소가 아닙니다.",
    },
  });

  const passwordRegister = register("password", {
    required: {
      value: true,
      message: "비밀번호를 입력해주세요.",
    },
    pattern: {
      value: VALIDATE.userPassword,
      message: "비밀번호를 확인해주세요.",
    },
  });

  const passwordCheckRegister = register("passwordCheck", {
    validate: {
      isEqual: (value) => {
        const { password } = getValues();
        return password === value || "비밀번호가 일치하지 않습니다.";
      },
    },
  });

  const checkEmail = async (email: string) => {
    try {
      await axiosInstance.post("/check-email", { email: email });
      return true;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError("email", {
          message: error.response.data.error.message,
        });
      } else {
        setError("email", {
          message: "알 수 없는 에러가 발생했습니다.",
        });
      }
      return false;
    }
  };

  const onSubmitHandler: SubmitHandler<SignUpProps> = async () => {
    setIsLoading(true);
    const { passwordCheck, ...values } = getValues();
    const isValidEmail = await checkEmail(values.email);
    if (!isValidEmail) {
      setIsLoading(false);
      return;
    }
    try {
      const res = await axiosInstance.post("/sign-up", values);
      const { accessToken, refreshToken } = res.data.data;
      window.localStorage.setItem("accessToken", accessToken);
      window.localStorage.setItem("refreshToken", refreshToken);
      router.push("/folder/all");
    } catch (error) {
      setError("email", {
        message: "알 수 없는 에러가 발생했습니다.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const accessToken = window.localStorage.getItem("accessToken");
    if (accessToken) router.push("/folder/all");
  }, [router]);

  return (
    <>
      <Head>
        <title>회원가입 - Linkbrary</title>
      </Head>
      <AuthLayout handleSubmit={handleSubmit(onSubmitHandler)} mode="signUp">
        <AuthInputs.AuthInput
          label="이메일"
          type="email"
          placeholder="이메일을 입력해 주세요."
          {...emailRegister}
          errors={errors}
          autoComplete="username"
        />
        <AuthInputs.PasswordInput
          label="비밀번호"
          type="password"
          placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요. "
          {...passwordRegister}
          errors={errors}
          autoComplete="new-password"
        />
        <AuthInputs.PasswordInput
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호와 일치하는 값을 입력해 주세요."
          {...passwordCheckRegister}
          errors={errors}
          autoComplete="new-password"
        />
        <AuthLayout.AuthButton disabled={isLoading}>로그인</AuthLayout.AuthButton>
      </AuthLayout>
    </>
  );
};

export default SignUp;
