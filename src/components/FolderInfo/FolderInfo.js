import styles from "./FolderInfo.module.css";

const FolderInfo = ({ folderData }) => {
  if (folderData && folderData.folder) {
    const { folder } = folderData;
    const { owner } = folder;

    return (
      <div className={styles.folderInfo}>
        <div className={styles.profileInfo}>
          <img className={styles.profileImg} src={owner.profileImageSource} alt="프로필 이미지" />
          <p className={styles.ownerName}>@{owner.name}</p>
        </div>
        <h1 className={styles.folderName}>{folder.name}</h1>
      </div>
    );
  }
};

export default FolderInfo;
