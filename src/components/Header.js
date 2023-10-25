import styles from '../styles/Header.module.css';
import { getUserData } from '../api/getUserData';
import logoImage from '../assets/png/logo.png';
import { useState } from 'react';

function Header() {
  const { name, email, profileImageSource } = getUserData;
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleButtonClick = async (event) => {
    try {
      setIsLoading(true);
      event.preventDefault();
      setUserData(await getUserData());
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <a href='/'>
            <img src={logoImage} alt='LinkBrary logo' />
          </a>
        </div>
        <div className={styles.profile}>
          {!userData ? (
            <button
              type='button'
              className={styles.loginButton}
              disabled={isLoading}
              onClick={handleButtonClick}
            >
              로그인
            </button>
          ) : (
            <div className={styles.imageContainer}>
              <img
                className={styles.profileLogo}
                src={profileImageSource}
                alt={name}
              />
              <span className={styles.profileEmail}>{email}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
