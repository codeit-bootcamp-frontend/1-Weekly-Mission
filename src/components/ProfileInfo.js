import "../styles/ProfileInfo.css";

const ProfileInfo = ({ profileImageSource, email }) => {
  return (
    <div className="ProfileInfo">
      <img className="ProfileInfo__profile-img" src={profileImageSource} alt="프로필 아이콘" />
      <span className="ProfileInfo__email">{email}</span>
    </div>
  );
};
export default ProfileInfo;
