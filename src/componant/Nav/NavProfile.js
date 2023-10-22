import { getSampleUser } from '../../api.js';
import styles from './Nav.module.css';

const { email, profileImageSource } = await getSampleUser();

function NavProfile() {
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
