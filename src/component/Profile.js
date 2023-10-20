function Profile({ userInfo }) {
  if (userInfo) {
    return (
      <div className="profile">
        <img src={userInfo.profileImageSource} />
        <div>{userInfo.name}</div>
        <div>{userInfo.email}</div>
      </div>
    );
  }
  return <button>로그인</button>;
}

export default Profile;
