import { useState, useEffect } from "react";
import { TitleContainer } from "@/src/auth/ui-title-container/TitleContainer";
import { SignInLayout } from "@/src/page-layout/SignInLayout/SignInLayout";
import { Input } from "@/src/sharing/ui-input";
import { PasswordInput } from "@/src/sharing/ui-password-input";
import { SocialLayout } from "@/src/auth/ui-social-container/SocialContainer";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { onChange, onBlur, name, ref } = register("email");
  const router = useRouter();

  const [values, setValues] = useState({
    input: "",
    password: "",
    re_password: "",
  });

  const handleChange = (e: any) => {
    const { value, name } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (localStorage.getItem("signInToken")) {
      router.push("/folder");
    }
  }, []);

  return (
    <SignInLayout
      titleContainer={
        <TitleContainer
          memberCheckText="회원이 아니신가요?"
          linkText="회원 가입하기"
          destination="/sign-up"
        />
      }
      input={
        <Input name="email" value={values.input} onChange={handleChange} />
      }
      passwordInput={
        <PasswordInput
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      }
      socialContainer={<SocialLayout text="다른 방식으로 가입하기" />}
      handleSubmit={handleSubmit}
    ></SignInLayout>
  );
}
