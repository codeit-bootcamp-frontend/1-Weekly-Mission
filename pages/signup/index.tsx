import InputUserInfo from "@/src/Input/feature-user-info-input/InputUserInfo";
import SignTitle from "@/src/Input/ui-input-title/SignTitle";
import SignButton from "@/src/link/ui-sign-button/SignButton";
import SocialSign from "@/src/link/ui-social-sign/SocialSign";
import { SignUpLayout } from "@/src/page-layout/SignUpLayout/SignUpLayout";
import { useRouter } from "next/router";

const SignUpPage = () => {
  const router = useRouter();
  const currentPath: string = router.pathname;
  const pathName = {
    isSigninPage: currentPath === "/signin",
    isSignupPage: currentPath === "/signup",
  };
  return (
    <SignUpLayout
      signTitle={<SignTitle pathName={pathName} />}
      emailInput={<InputUserInfo isPassword={false} />}
      passwordInput={<InputUserInfo isPassword={true} />}
      passwordCheckInput={
        <InputUserInfo isPassword={true} checkPassword={true} />
      }
      loginButton={<SignButton pathName={pathName} />}
      socialLogin={<SocialSign pathName={pathName} />}
    />
  );
};

export default SignUpPage;
