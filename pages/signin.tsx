import GradientButton from "@/components/button/GradientButton";
import EmailInput from "@/components/input/EmailInput";
import PasswordInput from "@/components/input/PasswordInput";
import UserLayout from "@/components/user/UserLayout";
import { saveToken, signin } from "@/lib/api/auth.ts/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export interface userData {
  email: string;
  password: string;
}

const Signin = () => {
  const router = useRouter();

  const methods = useForm<{
    email: string;
    password: string;
  }>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, control, setError } = methods;

  const signinMutation = useMutation({
    mutationFn: (data: userData) => signin(data),
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

  const handleSignin = async (data: userData) => {
    signinMutation.mutate(data);
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
        title: "회원이 아니신가요?",
        href: "/signup",
        linkTitle: "회원 가입하기",
      }}
      socialLoginItemTitle="소셜 로그인"
      formItem={
        <form onSubmit={handleSubmit(handleSignin)}>
          <EmailInput control={control} name={"email"} />
          <PasswordInput
            label={"password"}
            placeholder={"비밀번호를 입력해주세요"}
            control={control}
            name={"password"}
          />
          <GradientButton type="submit">로그인</GradientButton>
        </form>
      }
    />
  );
};

export default Signin;
