import styles from '../styles/Header.module.css';
import logoImage from '../assets/images/logo/logo.png';
import LoginButton from './LoginButton.js';

function Header() {
  return (
    <header className={styles.root}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href='./'>
            <img src={logoImage} alt='LinkBrary logo' />
          </a>
        </div>
        <LoginButton />
      </div>
    </header>
  );
}

export default Header;
