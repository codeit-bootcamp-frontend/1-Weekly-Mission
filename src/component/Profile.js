function Profile({ folderInfo }) {
  if (folderInfo) {
    return (
      <div className="profile">
        <img
          className="profile__img"
          src={folderInfo.owner.profileImageSource}
          alt="프로필 이미지"
        />
        <div className="profile__name">{folderInfo.owner.name}</div>
        <div className="profile__folder-name">{folderInfo.name}</div>
      </div>
    );
  }
  return <button>로그인</button>;
}

export default Profile;
