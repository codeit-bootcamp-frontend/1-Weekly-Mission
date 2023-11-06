import "./FolderInfo.css";

function FolderInfo({ folderInfo }) {
  if (!folderInfo) return;

  const { name: folderName } = folderInfo;
  const { name, profileImageSource } = folderInfo.owner;

  return (
    <div className="folder-info">
      <img
        className="folder-profile"
        src={profileImageSource}
        alt="유저 폴더 파일"
      />
      <span className="folder-user-name">{name}</span>
      <span className="folder-name">{folderName}</span>
    </div>
  );
}

export default FolderInfo;
