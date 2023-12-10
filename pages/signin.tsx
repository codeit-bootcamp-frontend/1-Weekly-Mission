import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Logo from "src/assets/icon/logo.svg";
import Button from "src/components/Button/Button";
import Input from "src/components/Input/Input";
import InputLabel from "src/components/InputLabel/InputLabel";
import SignText from "src/components/SignText/SignText";
import SocialLogin from "src/components/SocialLogin/SocialLogin";
import { INPUT_TYPE } from "src/constants/input";
import { useLogin } from "src/hook/SignIn/useLogin";
import { checkToken } from "src/utils/aboutToken";
import styles from "styles/SignPage.module.css";

function SignIn() {
  const router = useRouter();
  const { email, password } = INPUT_TYPE;
  const { handleEnter, handleLogin, account, setAccount, status } = useLogin();

  useEffect(() => {
    if (checkToken()) {
      router.push("/folder");
    }
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.inWrapper}>
        <div className={styles.header}>
          <Image width={210} height={38} src={Logo} alt="로고 이미지" />
          <SignText content="회원이 아니신가요?" link="회원 가입하기" />
        </div>
        <form
          className={styles.inputForm}
          onSubmit={handleLogin}
          onKeyDown={handleEnter}
        >
          <div className={styles.emailInput}>
            <InputLabel htmlFor={email.type} content="이메일" />
            <Input
              id={email.type}
              type={email.type}
              placeholder={email.placeholder}
              status={status}
              account={account}
              setAccount={setAccount}
            />
          </div>
          <div className={styles.passwordInput}>
            <InputLabel htmlFor={password.type} content="비밀번호" />
            <Input
              id={password.type}
              type={password.type}
              placeholder={password.signInPlaceholder}
              status={status}
              account={account}
              setAccount={setAccount}
            />
          </div>
          <Button content="로그인" />
        </form>
        <SocialLogin content="소셜 로그인" />
      </div>
    </div>
  );
}

export default SignIn;
