import "./Profile.css";

export const Profile = ({ profile }) => {
  return (
    <div className="Profile">
      <img className="Profile-image" src={profile.profileImageSource} alt="프로필 이미지" />
      <span className="Profile-email">{profile.email}</span>
    </div>
  );
};
