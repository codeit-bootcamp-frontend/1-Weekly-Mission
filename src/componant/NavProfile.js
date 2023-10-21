import { getSampleUser } from '../api.js';

const { email, profileImageSource } = await getSampleUser();

function NavProfile({ className }) {
  const [nav__profile, nav__profileImage, nav__UserProfile] = className;
  return (
    <div className={nav__profile}>
      <div className={nav__profileImage}>
        <img src={profileImageSource} alt="profile" />
      </div>
      <p className={nav__UserProfile}>{email}</p>
    </div>
  );
}

export default NavProfile;
