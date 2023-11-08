import styles from '../styles/LoginButton.module.css';
// import UserDataInfo from './UserDataInfo.js';
// import { getUserData } from '../api/getUserData.js';
import { useContext, useState } from 'react';
import { AccountContext } from '../context/AccountContext.js';

const LoginButton = () => {
  const { account, userErrorMessage } = useContext(AccountContext);
  const { name, email, image_source: profileImageSource } = account;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const mobileWidth = 390;
  // const [isLoading, setIsLoading] = useState(false);
  // const [userData, setUserData] = useState(null);

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth);
  });

  // const handleButtonClick = async (e) => {
  //   try {
  //     setIsLoading(true);
  //     e.preventDefault();
  //     setUserData(await getUserData());
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  //

  return (
    <div className={styles.root}>
      {!account ? (
        <button type='button' className={styles.button}>
          로그인
        </button>
      ) : (
        <>
          <img className={styles.img} src={profileImageSource} alt={name} />
          {windowWidth > mobileWidth ? (
            <span className={styles.id}>{email && email}</span>
          ) : null}
        </>
      )}
      {userErrorMessage && <span>{userErrorMessage.message}</span>}
    </div>
  );
};

export default LoginButton;
