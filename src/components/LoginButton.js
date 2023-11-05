import styles from '../styles/LoginButton.module.css';
import UserDataInfo from './UserDataInfo.js';
import { getUserData } from '../api/getUserData.js';
import { useState } from 'react';

const LoginButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleButtonClick = async (e) => {
    try {
      setIsLoading(true);
      e.preventDefault();
      setUserData(await getUserData());
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.root}>
      {userData ? (
        <UserDataInfo userData={userData} />
      ) : (
        <button
          type='button'
          className={styles.loginButton}
          disabled={isLoading}
          onClick={handleButtonClick}
        >
          로그인
        </button>
      )}
    </div>
  );
};

export default LoginButton;
