/* 네비게이션 컴포넌트 */

/* css 모듈 방식 적용
 */
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import logoSvg from "assets/images/logo.svg";

function Button() {
  return (
    <button className={`${styles["link-button"]} ${styles["signin-button"]}`}>
      <a href="./" className="a-label">
        로그인
      </a>
    </button>
  );
}

function Nav({ userEmail, userProfile }) {
  if (!userEmail) {
    return (
      <nav className={styles["nav"]}>
        <div className={styles["gnb"]}>
          <Link to="/">
            <img src={logoSvg} alt="링크브러리 로고" />
          </Link>
          <Button />
        </div>
      </nav>
    );
  }
  return (
    <nav className={styles["nav"]}>
      <div className={styles["gnb"]}>
        <Link to="/">
          <img src={logoSvg} alt="링크브러리 로고" />
        </Link>
        <div className={styles["user-info"]}>
          <img
            src={userProfile}
            alt="profile"
            className={styles["profile-img"]}
          />
          <span>{userEmail}</span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
