import { Link } from "react-router-dom";
import styles from "styles/modules/nav.module.css";
import UserInform from "./profile/UserInform";

function Nav() {
  return (
    <nav className={styles.wrapper}>
      <Link to="/">
        <img src="assets/images/logo.png" alt="logo" />
      </Link>
      <UserInform />
    </nav>
  );
}

export default Nav;
