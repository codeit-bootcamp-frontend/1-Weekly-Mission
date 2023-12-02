import logoImg from "../assets/images/logo.png";
import styles from "styles/Nav.module.css";
import Image from "next/image";

function Nav({ userInfo }) {
  // 유저데이터가 있으면 유저데이터, 없으면 로그인 버튼
  if (!userInfo) return;

  const { email, image_source } = userInfo;

  return (
    <div className={styles.nav}>
      <a href="/">
        <Image className={styles.logo} src={logoImg} alt="로고" />
      </a>
      {userInfo ? (
        <div className={styles.userInfo}>
          <img
            className={styles.userProfile}
            src={image_source}
            alt="유저 프로필"
          />
          <span className={styles.userEmail}>{email}</span>
        </div>
      ) : (
        <a href="/signin.html" className={styles.loginLink}>
          로그인
        </a>
      )}
    </div>
  );
}

export default Nav;
