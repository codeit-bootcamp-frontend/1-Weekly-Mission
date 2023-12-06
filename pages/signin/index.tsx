import InputUserInfo from "@/src/Input/feature-user-info-input/InputUserInfo";
import SignTitle from "@/src/Input/ui-input-title/SignTitle";
import SignButton from "@/src/link/ui-sign-button/SignButton";
import SocialSign from "@/src/link/ui-social-sign/SocialSign";
import { SignInLayout } from "@/src/page-layout/SignInLayout/SignInLayout";
import { useRouter } from "next/router";

const SigninPage = () => {
  const router = useRouter();
  const currentPath: string = router.pathname;
  return (
        <SignInLayout
      signTitle={<SignTitle currentPath={currentPath} />}
      emailInput={<InputUserInfo isPassword={false} />}
      passwordInput={<InputUserInfo isPassword={true} />}
      loginButton={<SignButton currentPath={currentPath} />}
      socialLogin={<SocialSign currentPath={currentPath} />}
    />
  );
};

export default SigninPage;
