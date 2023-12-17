import { useEffect } from "react";
import { TitleContainer } from "@/src/auth/ui-title-container/TitleContainer";
import { SignUpLayout } from "@/src/page-layout/SignUpLayout/SignUpLayout";
import { SocialLayout } from "@/src/auth/ui-social-container/SocialContainer";
import { useRouter } from "next/router";

export default function SignUp() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("signUpToken")) {
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
      socialContainer={<SocialLayout text="소셜 로그인" />}
    ></SignUpLayout>
  );
}
