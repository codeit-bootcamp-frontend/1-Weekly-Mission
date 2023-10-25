import '../styles/folderInfo.css';

function FolderInfo({ folderData }) {
  const { name, owner } = folderData;

  return (
    <div className="folder_info_container">
      <div className="folder_owner">
        <img className="folder_owner_img" src={owner.profileImageSource} alt="폴더 소유자 프로필 사진" />
        <div className="folder_owner_name">{`@${owner.name}`}</div>
      </div>
      <div className="folder_name">{name}</div>
    </div>
  );
}

export default FolderInfo;
