import { getProfile } from "../api";

const { email, profileImageSource } = await getProfile();

const NavProfile = () => {
  return (
    <div className="profile_wrapper">
      <img
        className="profile_img"
        src={profileImageSource}
        alt="프로필 이미지"
      />
      <section className="profile_email">{email}</section>
    </div>
  );
};

export default NavProfile;
