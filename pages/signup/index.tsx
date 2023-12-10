import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { axiosInstance } from "@/axiosInstance";
import axios from "axios";
import { Email_VALIDATE, PASSWORD_VALIDATE } from "@/validate";
import { useEffect } from "react";
import { SignButton, SignLayout } from "@/components/layout/SignLayout";
import { InputEmail, InputPW } from "@/components/Input";

interface SignUpFormProps {
  email: string;
  password: string;
  checkingPW: string;
}

export default function SignUp() {
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setError,
  } = useForm<SignUpFormProps>({ mode: "onBlur", reValidateMode: "onBlur" });

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
      message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    },
  });

  const checkingPWRegister = register("checkingPW", {
    validate: {
      isSame: (pw) => {
        const { password } = getValues();
        if (password === pw) {
          return;
        }
        return "비밀번호가 일치하지 않아요.";
      },
    },
  });

  const SearchSameEmail = async (email: string) => {
    try {
      await axiosInstance.post("/check-email", { email: email });
      return true;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        setError("email", {
          message: "중복된 이메일 입니다.",
        });
      } else {
        setError("email", {
          message: "알 수 없는 에러가 발생했습니다.",
        });
      }
      return false;
    }
  };

  const onSubmit: SubmitHandler<SignUpFormProps> = async () => {
    const { checkingPW, email, password } = getValues();
    const approvedEmail = await SearchSameEmail(email);
    if (!approvedEmail) {
      return;
    }
    try {
      const res = await axiosInstance.post("/sign-up", {
        checkingPW,
        email,
        password,
      });
      const { accessToken } = res.data.data;
      window.localStorage.setItem("accessToken", accessToken);
      router.push("/folder");
    } catch (error) {
      setError("email", {
        message: "서버에서 오류가 발생하였습니다",
      });
    }
  };

  useEffect(() => {
    const accessToken = window.localStorage.getItem("accessToken");
    if (accessToken) router.push("/folder");
  }, []);

  return (
    <>
      <SignLayout handleSubmit={handleSubmit(onSubmit)} formType="up">
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
          placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
          {...passwordRegister}
          errors={errors}
          autoComplete="current-password"
        />
        <InputPW
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호와 일치하는 값을 입력해 주세요."
          {...checkingPWRegister}
          errors={errors}
          autoComplete="new-password"
        />

        <SignButton>회원가입</SignButton>
      </SignLayout>
    </>
  );
}
