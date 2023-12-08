import { useEffect } from "react";
import { TitleContainer } from "@/src/auth/ui-title-container/TitleContainer";
import { SignInLayout } from "@/src/page-layout/SignInLayout/SignInLayout";
import { SocialLayout } from "@/src/auth/ui-social-container/SocialContainer";
import { useRouter } from "next/router";

export default function SignIn() {
  const router = useRouter();

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
      socialContainer={<SocialLayout text="다른 방식으로 가입하기" />}
    ></SignInLayout>
  );
}
