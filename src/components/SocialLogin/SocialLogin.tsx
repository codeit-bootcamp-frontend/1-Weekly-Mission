import Image from "next/image";
import Link from "next/link";
import GoogleImg from "src/assets/icon/google.svg";
import KakaoImg from "src/assets/icon/kakao.svg";
import styles from "src/components/SocialLogin/SocialLogin.module.css";

function SocialLogin() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.socialText}>소셜 로그인</p>
      <div className={styles.loginButton}>
        <Link className="google" href="https://www.google.com/" target="_blank">
          <Image className="icon" src={GoogleImg} alt="구글 로그인 아이콘" />
        </Link>
        <Link
          className="kakao"
          href="https://www.kakaocorp.com/page/"
          target="_blank"
        >
          <Image className="icon" src={KakaoImg} alt="카카오톡 로그인 아이콘" />
        </Link>
      </div>
    </div>
  );
}

export default SocialLogin;
