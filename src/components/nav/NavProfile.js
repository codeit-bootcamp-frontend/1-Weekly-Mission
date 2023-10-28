const NavProfile = ({ user_data }) => {
  const { email, profileImageSource, image_source } = user_data;

  return (
    <div className="profile_wrapper">
      <img
        className="profile_img"
        src={profileImageSource || image_source}
        alt="프로필 이미지"
      />
      <section className="profile_email">{email}</section>
    </div>
  );
};

export default NavProfile;
