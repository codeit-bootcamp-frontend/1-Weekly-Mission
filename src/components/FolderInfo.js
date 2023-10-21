import "../style/FolderInfo.css";

const FolderInfo = ({ data }) => {
  const { folderName, ownerName, ownerImage } = data;
  return (
    <>
      <div className="ownerWrapper">
        <img className="ownerImage" src={ownerImage} alt="폴더 소유자 사진" />
        <p className="ownerName">{`@${ownerName}`}</p>
      </div>
      <p className="folderName">{folderName}</p>
    </>
  );
};

export default FolderInfo;
