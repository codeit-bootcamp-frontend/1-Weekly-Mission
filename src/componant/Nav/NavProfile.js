import { getSampleUser } from '../../api.js';
import style from './Nav.module.css';

const { email, profileImageSource } = await getSampleUser();

function NavProfile() {
  return (
    <div className={style.profile}>
      <div className={style.profileImage}>
        <img src={profileImageSource} alt="profile" />
      </div>
      <p className={style.UserProfile}>{email}</p>
    </div>
  );
}

export default NavProfile;
