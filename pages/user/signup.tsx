import AuthInputs from "@/components/authInput/AuthInput";
import { VALIDATE } from "@/constants/constants";
import AuthLayout from "@/layouts/authLayout/AuthLayout";
import Head from "next/head";
import { SubmitHandler, useForm } from "react-hook-form";

interface SignUpProps {
  email: string;
  password: string;
  passwordCheck: string;
}

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    getValues,
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

  const onSubmitHandler: SubmitHandler<SignUpProps> = () => {};

  return (
    <>
      <Head>
        <title>회원가입 - Linkbrary</title>
      </Head>
      <AuthLayout handleSubmit={handleSubmit(onSubmitHandler)} mode="signup">
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
          placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요. "
          {...passwordRegister}
          errors={errors}
        />
        <AuthInputs.PasswordInput
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호와 일치하는 값을 입력해 주세요."
          {...passwordCheckRegister}
          errors={errors}
        />
        <AuthLayout.AuthButton>로그인</AuthLayout.AuthButton>
      </AuthLayout>
    </>
  );
};

export default SignUp;
