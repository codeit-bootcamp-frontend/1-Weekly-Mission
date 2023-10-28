import { useEffect } from 'react';
import styles from './Nav.module.css';
import UseUserValues from '../../hooks/UseUserValues';

function NavProfile() {
  const [values, getUserData] = UseUserValues();

  useEffect(() => {
    getUserData();
  }, [getUserData]);

  return (
    <div className={styles.profile}>
      <div className={styles.profileImage}>
        <img src={values.imageSource} alt="profile" />
      </div>
      <p className={styles.UserProfile}>{values.email}</p>
    </div>
  );
}

export default NavProfile;
