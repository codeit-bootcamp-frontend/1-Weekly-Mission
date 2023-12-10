import GradientButton from "@/components/button/GradientButton";
import EmailInput from "@/components/input/EmailInput";
import PasswordInput from "@/components/input/PasswordInput";
import UserLayout from "@/components/user/UserLayout";
import { ApiMapper } from "@/lib/apiMapper";
import request from "@/lib/axios";
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

  const handleSignin = async (data: any) => {
    try {
      const result = await request.post(`${ApiMapper.auth.post.SIGN_IN}`, data);

      if (result.status === 200) {
        const { data } = result;
        localStorage.setItem("accessToken", data.data.accessToken);
        router.push("/folder");
        return;
      }
      throw new Error();
    } catch (e) {
      setError("email", {
        type: "validate",
        message: "이메일을 확인해주세요",
      });
      setError("password", {
        type: "validate",
        message: "비빌번호를 확인해주세요",
      });
    }
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
