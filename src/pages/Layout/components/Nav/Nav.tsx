import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";
import { ReactComponent as LogoSvg } from "src/assets/icons/logo.svg";
import { UserInterface } from "src/types";

interface Props {
  profile?: UserInterface;
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
        {!profile ? (
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
