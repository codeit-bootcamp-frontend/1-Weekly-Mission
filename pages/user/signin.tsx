import AuthInputs from "@/components/authInput/AuthInput";
import { VALIDATE } from "@/constants/constants";
import AuthLayout from "@/layouts/authLayout/AuthLayout";
import Head from "next/head";
import { SubmitHandler, useForm } from "react-hook-form";

interface SignInProps {
  email: string;
  password: string;
}

const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInProps>({ mode: "onBlur", reValidateMode: "onBlur" });

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

  const onSubmitHandler: SubmitHandler<SignInProps> = () => {};

  return (
    <>
      <Head>
        <title>로그인 - Linkbrary</title>
      </Head>

      <AuthLayout handleSubmit={handleSubmit(onSubmitHandler)} mode="signin">
        <AuthInputs.AuthInput
          label="이메일"
          type="email"
          placeholder="이메일을 입력해 주세요."
          {...emailRegister}
          errors={errors}
        />
        <AuthInputs.PasswordInput
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해 주세요."
          {...passwordRegister}
          errors={errors}
        />
        <AuthLayout.AuthButton>로그인</AuthLayout.AuthButton>
      </AuthLayout>
    </>
  );
};

export default SignIn;
