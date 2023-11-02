/* 네비게이션 컴포넌트 */

import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
import { ReactComponent as LogoSvg } from "assets/images/logo.svg";

function Nav({ profile, isSticky }) {
  const navClassName = "${nav}" + (isSticky ? " ${sticky}" : "");
  const { userEmail, userProfileImage } = profile;

  return (
    <nav className={`${navClassName}`}>
      <div className={styles["gnb"]}>
        <Link to="/">
          <LogoSvg />
        </Link>
        {!userEmail ? (
          <button
            className={`${styles["link-button"]} ${styles["signin-button"]}`}
          >
            <a href="./" className="a-label">
              로그인
            </a>
          </button>
        ) : (
          <div className={styles["user-info"]}>
            <img
              src={userProfileImage}
              alt="profile"
              className={styles["profile-img"]}
            />
            <span>{userEmail}</span>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
