import styles from "../styles/NavBar.module.css";
import logo from "../assets/logo.svg";
import LoginButton from "./LoginButton";

const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <img src={logo} alt="LinkBrary 로고" />
        </a>
        <LoginButton />
      </div>
    </nav>
  );
};

export default NavBar;
