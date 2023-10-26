import "./Header.css";

const User = ({ folderInfo, owner }) => {
  return (
    <div className="header">
      <div className="user">
        <img
          src={owner.profileImageSource}
          className="folder-profile-image"
          alt="프로필 이미지"
        />
        <div className="user-name">@{owner.name}</div>
        <div className="user-folder-name">{folderInfo.name}</div>
      </div>
    </div>
  );
};

export default User;
