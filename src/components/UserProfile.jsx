import '../css/userProfile.css';

function UserProfile({ userProfile }) {
  const userProfileImage = userProfile?.image_source;
  const userEmail = userProfile?.email;

  return (
    <>
      <div className="user-profile">
        <img className="user-profile-image" src={userProfileImage} alt="유저 프로필 이미지" />
        <p className="user-profile-email">{userEmail}</p>
      </div>
    </>
  );
}

export default UserProfile;
