import GradientButton from "@/components/button/GradientButton";
import EmailInput from "@/components/input/EmailInput";
import PasswordInput from "@/components/input/PasswordInput";
import UserLayout from "@/components/user/UserLayout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { userData } from "./signin";
import { checkEmail, saveToken, signup } from "@/lib/api/auth.ts/auth";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface SignupData extends userData {
  passwordConfirm: string;
}

const regexPw = /^(?=.*[a-zA-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

const Signup = () => {
  const router = useRouter();

  const signupMutation = useMutation({
    mutationFn: (data: userData) => signup(data),
    onError: () => {
      setError("email", {
        type: "validate",
        message: "이메일을 확인해주세요",
      });
      setError("password", {
        type: "validate",
        message: "비빌번호를 확인해주세요",
      });
    },
    onSuccess: (data) => {
      saveToken(data);
      router.push("/folder");
    },
  });

  const methods = useForm<SignupData>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const { handleSubmit, control, setError, getValues, register } = methods;

  register("password", {
    pattern: {
      value: regexPw,
      message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
    },
  });

  const checkEmailMutation = useMutation({
    mutationFn: () => checkEmail(getValues("email")),
    onError: (error: AxiosError) => {
      if (error.response?.status === 409) {
        setError("email", {
          type: "validate",
          message: "이미 가입된 이메일입니다. ",
        });
        return;
      }
      alert("문제가 발생했습니다. 잠시후 다시 시도해주세요");
    },
  });

  const handleIsValidPassword = () => {
    const password = getValues("password");
    const passwordConfirm = getValues("passwordConfirm");

    if (password !== passwordConfirm) {
      setError("passwordConfirm", {
        type: "validate",
        message: "비밀번호가 일치하지 않습니다.",
      });
      return false;
    }

    return true;
  };

  const handleSignup = async (data: userData) => {
    const isValidPassword: boolean = handleIsValidPassword();
    if (!isValidPassword) {
      return;
    }

    checkEmailMutation.mutate();
    if (!checkEmailMutation.isSuccess) {
      return;
    }

    signupMutation.mutate(data);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      router.push("/folder");
    }
  }, [router]);

  return (
    <UserLayout
      moveToPageItem={{
        title: "이미 회원이신가요?",
        href: "/signin",
        linkTitle: "로그인하기",
      }}
      socialLoginItemTitle="다른 방식으로 가입하기"
      formItem={
        <form onSubmit={handleSubmit(handleSignup)}>
          <EmailInput control={control} name={"email"} />
          <PasswordInput
            placeholder={"영문, 숫자를 조합해 8자 이상 입력해 주세요."}
            label={"password"}
            control={control}
            name={"password"}
          />
          <PasswordInput
            label={"passwordConfirm"}
            placeholder={"비밀번호와 일치하는 값을 입력해 주세요"}
            control={control}
            name={"passwordConfirm"}
          />
          <GradientButton type="submit">회원가입</GradientButton>
        </form>
      }
    />
  );
};

export default Signup;
