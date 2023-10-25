import "./FolderInfo.css";

function FolderInfo({ data }) {
  const { folder } = data;
  const folderName = folder?.name;
  const owner = folder?.owner;
  const ownerName = owner?.name;
  const ownerProfileImg = owner?.profileImageSource;

  return (
    <div className="folderInfo">
      <img className="folderImg" src={ownerProfileImg} alt="폴더 소유자 프로필 이미지" />
      <p className="ownerName">{ownerName}</p>
      <h1 className="folderName">{folderName}</h1>
    </div>
  );
}

export default FolderInfo;
