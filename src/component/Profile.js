function Profile({ folderInfo }) {
  if (folderInfo) {
    return (
      <div className="profile">
        <img src={folderInfo.owner.profileImageSource} />
        <div>{folderInfo.owner.name}</div>
        <div>{folderInfo.name}</div>
      </div>
    );
  }
  return <button>로그인</button>;
}

export default Profile;
