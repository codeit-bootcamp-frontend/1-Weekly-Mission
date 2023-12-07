import InputUserInfo from "@/src/Input/feature-user-info-input/InputUserInfo";
import SignTitle from "@/src/Input/ui-input-title/SignTitle";
import SignButton from "@/src/link/ui-sign-button/SignButton";
import SocialSign from "@/src/link/ui-social-sign/SocialSign";
import { SignInLayout } from "@/src/page-layout/SignInLayout/SignInLayout";
import { useRouter } from "next/router";

const SigninPage = () => {
  const router = useRouter();
  const currentPath: string = router.pathname;
  const pathName = {
    isSigninPage: currentPath === "/signin",
    isSignupPage: currentPath === "/signup",
  };
  return (
    <SignInLayout
      signTitle={<SignTitle pathName={pathName} />}
      emailInput={<InputUserInfo isPassword={false} />}
      passwordInput={<InputUserInfo isPassword={true} />}
      loginButton={<SignButton pathName={pathName} />}
      socialLogin={<SocialSign pathName={pathName} />}
    />
  );
};

export default SigninPage;
