import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { axiosInstance } from "@/axiosInstance";
import { Email_VALIDATE, PASSWORD_VALIDATE } from "@/validate";
import { useEffect } from "react";
import { SignButton, SignLayout } from "@/components/layout/SignLayout";
import { InputEmail, InputPW } from "@/components/Input";
interface SignInFormProps {
  email: string;
  password: string;
}

export default function SignIn() {
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setError,
  } = useForm<SignInFormProps>({ mode: "onBlur", reValidateMode: "onBlur" });

  const emailRegister = register("email", {
    required: {
      value: true,
      message: "이메일을 입력해 주세요.",
    },
    pattern: {
      value: Email_VALIDATE,
      message: "올바른 이메일 주소가 아닙니다.",
    },
  });

  const passwordRegister = register("password", {
    required: {
      value: true,
      message: "비밀번호를 입력해 주세요.",
    },
    pattern: {
      value: PASSWORD_VALIDATE,
      message: "비밀번호를 확인해 주세요.",
    },
  });

  const onSubmit: SubmitHandler<SignInFormProps> = async () => {
    const ReadValues = getValues();

    try {
      const res = await axiosInstance.post("/sign-in", ReadValues);
      const { accessToken } = res.data.data;
      window.localStorage.setItem("accessToken", accessToken);
      router.push("/folder");
    } catch (error) {
      setError("email", {
        message: "이메일을 확인해 주세요.",
      });
      setError("password", {
        message: "비밀번호를 확인해 주세요.",
      });
    }
  };

  useEffect(() => {
    const accessToken = window.localStorage.getItem("accessToken");
    if (accessToken) router.push("/folder");
  }, []);

  return (
    <>
      <SignLayout handleSubmit={handleSubmit(onSubmit)} formType="in">
        <InputEmail
          label="이메일"
          type="email"
          errors={errors}
          autoComplete="username"
          placeholder="이메일을 입력해 주세요."
          {...emailRegister}
        />

        <InputPW
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          {...passwordRegister}
          errors={errors}
          autoComplete="current-password"
        />

        <SignButton>로그인</SignButton>
      </SignLayout>
    </>
  );
}
