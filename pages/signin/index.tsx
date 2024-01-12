import { SignInForm } from "@/src/auth/feature-sign-in-form";
import { Oauth } from "@/src/auth/feature-oauth";
import { SignHeader } from "@/src/auth/ui-sign-header";
import { SignLayout } from "@/src/page-layout/SignLayout";
import { ROUTE } from "@/src/sharing/util";

const SignInPage = () => {
  return (
    <SignLayout
      header={
        <SignHeader
          message="회원이 아니신가요?"
          link={{ text: "회원 가입하기", href: ROUTE.회원가입 }}
        />
      }
      form={<SignInForm />}
      oauth={<Oauth description="소셜 로그인" />}
    />
  );
};

export default SignInPage;
