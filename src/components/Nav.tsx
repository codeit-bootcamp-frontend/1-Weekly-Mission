import Button from "components/button";
import { Link } from "react-router-dom";
import styles from "styles/modules/nav.module.css";

function Nav() {
  return (
    <nav className={styles.wrapper}>
      <Link to="/">
        <img src="assets/images/logo.png" alt="logo" />
      </Link>

      <Button content="로그인" link="/signin" />
    </nav>
  );
}

export default Nav;
