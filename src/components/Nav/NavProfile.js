import { useEffect, useState } from 'react';
import { getSampleUser } from '../../apis/api';
import styles from './Nav.module.css';

function NavProfile() {
  const [email, setEmail] = useState('');
  const [profileImageSource, setProfileImageSource] = useState();

  const loadUserData = async () => {
    const { email, profileImageSource } = await getSampleUser();
    setEmail(email);
    setProfileImageSource(profileImageSource);
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <div className={styles.profile}>
      <div className={styles.profileImage}>
        <img src={profileImageSource} alt="profile" />
      </div>
      <p className={styles.UserProfile}>{email}</p>
    </div>
  );
}

export default NavProfile;
