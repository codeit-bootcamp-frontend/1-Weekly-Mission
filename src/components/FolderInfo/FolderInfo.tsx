import style from "./FolderInfo.module.css";

interface Props {
  userName: string;
  folderName: string;
  profileImageSource: string;
}

function FolderInfo({ userName, folderName, profileImageSource }: Props) {
  return (
    <div className={style.root}>
      <img className={style.img} src={profileImageSource} alt="프로필 이미지" />
      <div className={style.userName}>@{userName}</div>
      <div className={style.folderName}>{folderName}</div>
    </div>
  );
}

export default FolderInfo;
