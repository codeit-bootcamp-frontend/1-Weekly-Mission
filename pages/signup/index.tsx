import InputCheckPassword from "@/src/Input/feature-user-info-input/InputCheckPassword";
import InputUserInfo from "@/src/Input/feature-user-info-input/InputUserInfo";
import SignTitle from "@/src/Input/ui-input-title/SignTitle";
import SignButton from "@/src/link/ui-sign-button/SignButton";
import SocialSign from "@/src/link/ui-social-sign/SocialSign";
import { SignUpLayout } from "@/src/page-layout/SignUpLayout/SignUpLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SignUpPage = () => {
  const router = useRouter();
  const currentPath: string = router.pathname;
  const pathName = {
    isSigninPage: currentPath === "/signin",
    isSignupPage: currentPath === "/signup",
  };

  const [passwordValue, setPasswordValue] = useState("");
  const [checkPasswordValue, setCheckPasswordValue] = useState("");
  const [isNotSamePasswordValue, setIsNotSamePasswordValue] = useState(false);

  useEffect(() => {
    setIsNotSamePasswordValue(passwordValue !== checkPasswordValue);
  }, [passwordValue, checkPasswordValue]);

  return (
    <SignUpLayout
      signTitle={<SignTitle pathName={pathName} />}
      emailInput={<InputUserInfo isPassword={false} pathName={{ pathName }} />}
      passwordInput={
        <InputUserInfo isPassword={true} onBlur={setPasswordValue} />
      }
      passwordCheckInput={
        <InputUserInfo
          isPassword={true}
          checkPassword={true}
          onBlur={setCheckPasswordValue}
          isNotSamePasswordValue={isNotSamePasswordValue}
        />
      }
      loginButton={<SignButton pathName={pathName} />}
      socialLogin={<SocialSign pathName={pathName} />}
    />
  );
};

export default SignUpPage;
