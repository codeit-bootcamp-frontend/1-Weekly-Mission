import style from "./FolderInfo.module.css";

function FolderInfo({ folderInfo: { owner, name } }) {
  return (
    owner && (
      <div className={style.root}>
        <img
          className={style.img}
          src={owner.profileImageSource}
          alt="프로필 이미지"
        />
        <div className={style.userName}>@{owner.name}</div>
        <div className={style.folderName}>{name}</div>
      </div>
    )
  );
}

export default FolderInfo;
