import style from "./FolderInfo.module.css";

function FolderInfo({ userName, folderName, profileImageSource }) {
  return (
    <div className={style.root}>
      <img className={style.img} src={profileImageSource} alt="프로필 이미지" />
      <div className={style.userName}>@{userName}</div>
      <div className={style.folderName}>{folderName}</div>
    </div>
  );
}

export default FolderInfo;
