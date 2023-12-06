import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Logo from "src/assets/icon/logo.svg";
import Button from "src/components/Button/Button";
import Input from "src/components/Input/Input";
import InputLabel from "src/components/InputLabel/InputLabel";
import SignText from "src/components/SignText/SignText";
import SocialLogin from "src/components/SocialLogin/SocialLogin";
import { INPUT_TYPE } from "src/constants/input";
import { checkToken, getToken } from "src/utils/aboutToken";
import styles from "styles/SignPage.module.css";
import { postSignUp } from "./api/api";

function SignUp() {
  const { email, password, passwordCheck } = INPUT_TYPE;
  const [status, setStatus] = useState(0);
  const router = useRouter();
  const [account, setAccount] = useState({
    email: "",
    password: "",
    passwordCheck: "",
  });

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const signUp = await postSignUp(account);
    //const duplicateEmail = await postDuplicationEmail(account);

    if (signUp.error) {
      setStatus(signUp.error.status);
    }
    //  if (duplicateEmail.error) {
    //   setStatus(409);
    // }
    if (signUp.data) {
      getToken("access-token", signUp.data.accessToken);
      router.push("/folder");
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      handleSignUp(e);
      setStatus(0);
    }
  };

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
          <SignText content="이미 회원이신가요?" link="로그인 하기" />
        </div>
        <form
          className={styles.inputForm}
          onSubmit={handleSignUp}
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
              placeholder={password.signUpPlaceholder}
              status={status}
              account={account}
              setAccount={setAccount}
            />
          </div>
          <div className={styles.passwordInput}>
            <InputLabel htmlFor={passwordCheck.type} content="비밀번호 확인" />
            <Input
              id={passwordCheck.type}
              type={passwordCheck.type}
              placeholder={passwordCheck.placeholder}
              account={account}
              setAccount={setAccount}
            />
          </div>
          <Button content="회원가입" />
        </form>
        <SocialLogin content="다른 방식으로 가입하기" />
      </div>
    </div>
  );
}

export default SignUp;
