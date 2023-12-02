import styles from "./SignFooter.module.css";
import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  children: ReactNode;
}

function SignFooter({ children }: Props) {
  return (
    <footer className={styles.root}>
      <h2 className={styles.title}>{children}</h2>
      <div className={styles.icon}>
        <Link href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
          <div className={styles.imageContainer}>
            <Image fill src="/images/icon/social-icons/sign_google.png" alt="구글 로그인 아이콘" />
          </div>
        </Link>
        <Link href="https://www.kakaocorp.com/page/" target="_blank" rel="noopener noreferrer">
          <div className={styles.imageContainer}>
            <Image fill src="/images/icon/social-icons/sign_kakao.png" alt="카카오톡 로그인 아이콘" />
          </div>
        </Link>
      </div>
    </footer>
  );
}

export default SignFooter;
