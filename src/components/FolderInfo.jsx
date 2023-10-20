import "./FolderInfo.css";

function FolderInfo({ folderName, ownerName, image }) {
  return (
    <div className="folderInfo">
      <img className="folderImg" src={image} alt="폴더 소유자 프로필 이미지" />
      <p className="ownerName">{ownerName}</p>
      <h1 className="folderName">{folderName}</h1>
    </div>
  );
}

export default FolderInfo;
