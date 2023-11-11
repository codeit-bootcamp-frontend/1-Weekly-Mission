/* 네비게이션 컴포넌트 */

import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
import { ReactComponent as LogoSvg } from "assets/images/logo.svg";

function Nav({ profile, isSticky }) {
  let navClassName = isSticky
    ? { className: `${styles["sticky"]} ${styles["nav"]}` }
    : { className: `nav` };

  return (
    <nav {...navClassName}>
      <div className={styles["gnb"]}>
        <Link to="/">
          <LogoSvg />
        </Link>
        {!profile.email ? (
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
              src={profile.image_source}
              alt="profile"
              className={styles["profile-img"]}
            />
            <span>{profile.email}</span>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
