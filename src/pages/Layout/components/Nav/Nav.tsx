/* 네비게이션 컴포넌트 */

import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
import { ReactComponent as LogoSvg } from "src/assets/images/logo.svg";

interface Props {
  profile: {
    id?: string;
    created_at?: string;
    email: string;
    image_source: string;
    name: string;
    auth_d: string;
  };
  isSticky?: boolean;
}

function Nav({ profile, isSticky }: Props) {
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
