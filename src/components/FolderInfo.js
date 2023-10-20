import "../styles/FolderInfo.css";

const FolderInfo = ({ userData }) => {
  const { name, profileImageSource } = userData;

  return (
    <div className="FolderInfo">
      {userData && (
        <div className="FolderInfo__profile-info">
          <img className="FolderInfo__profile-img" src={profileImageSource} alt="프로필 이미지" />
          <p className="FolderInfo__user-name">@{name}</p>
        </div>
      )}
      <h1 className="FolderInfo__folder-name">⭐️ 즐겨찾기</h1>
    </div>
  );
};

export default FolderInfo;
