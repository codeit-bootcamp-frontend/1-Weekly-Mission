import { useState, useEffect } from "react";
import { TitleContainer } from "@/src/auth/ui-title-container/TitleContainer";
import { SignUpLayout } from "@/src/page-layout/SignUpLayout/SignUpLayout";
import { Input } from "@/src/sharing/ui-input";
import { PasswordInput } from "@/src/sharing/ui-password-input";
import { SocialLayout } from "@/src/auth/ui-social-container/SocialContainer";
import { useRouter } from "next/router";

export default function SignUp() {
  const [values, setValues] = useState({
    input: "",
    password: "",
    re_password: "",
  });
  const router = useRouter();

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
    <SignUpLayout
      titleContainer={
        <TitleContainer
          memberCheckText="이미 회원이신가요?"
          linkText="로그인하기"
          destination="/sign-in"
        />
      }
      input={
        <Input name="input" value={values.input} onChange={handleChange} />
      }
      passwordInput={
        <PasswordInput
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      }
      re_passwordInput={
        <PasswordInput
          name="re_password"
          value={values.password}
          onChange={handleChange}
        />
      }
      socialContainer={<SocialLayout text="소셜 로그인" />}
    ></SignUpLayout>
  );
}
