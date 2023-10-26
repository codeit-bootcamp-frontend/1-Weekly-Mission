function UserProfile({ userProfile }) {
  const userProfileImage = userProfile?.profileImageSource ?? '';
  const email = userProfile?.email ?? '';
  return (
    <>
      <div className='user-profile'>
        <img className='user-profile-image' src={userProfileImage} alt='이름' />
        <p className='user-profile-email'>{email}</p>
      </div>
    </>
  );
}

export default UserProfile;
