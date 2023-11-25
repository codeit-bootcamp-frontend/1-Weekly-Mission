import kakaoIcon from "../../assets/images/sign_kakao.png";
import googleIcon from "../../assets/images/sign_google.png";
import styles from "./SignFooter.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function SignFooter({ children }: Props) {
  return (
    <footer className={styles.root}>
      <h2 className={styles.title}>{children}</h2>
      <div className={styles.icon}>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
          <img src={googleIcon} alt="구글 로그인 아이콘" />
        </a>
        <a href="https://www.kakaocorp.com/page/" target="_blank" rel="noopener noreferrer">
          <img src={kakaoIcon} alt="카카오톡 로그인 아이콘" />
        </a>
      </div>
    </footer>
  );
}

export default SignFooter;
