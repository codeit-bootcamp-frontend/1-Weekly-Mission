import "../styles/FolderInfo.css";

const FolderInfo = ({ folderData }) => {
  if (folderData && folderData.folder) {
    const { folder } = folderData;
    const { owner } = folder;

    return (
      <div className="FolderInfo">
        <div className="FolderInfo__profile-info">
          <img className="FolderInfo__profile-img" src={owner.profileImageSource} alt="프로필 이미지" />
          <p className="FolderInfo__user-name">@{owner.name}</p>
        </div>
        <h1 className="FolderInfo__folder-name">{folder.name}</h1>
      </div>
    );
  }
};

export default FolderInfo;
