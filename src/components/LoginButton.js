import { useState } from 'react';
import { UserDataInfo } from './UserDataInfo.js';
import { getUserData } from '../api/getUserData.js';
import styles from '../styles/LoginButton.Module.css';

function LoginButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleButtonClick = async () => {
    try {
      setIsLoading(true);
      setUserData(await getUserData());
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.root}>
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
        <UserDataInfo userData={userData} />
      )}
    </div>
  );
}

export default LoginButton;
