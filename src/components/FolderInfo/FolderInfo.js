import styles from "./FolderInfo.module.css";

const FolderInfo = ({ profileImage, userName, folderName }) => {
  return (
    <div className={styles.folderInfo}>
      <div className={styles.profileInfo}>
        <img className={styles.profileImg} src={profileImage} alt="프로필 이미지" />
        <p className={styles.ownerName}>@{userName}</p>
      </div>
      <h1 className={styles.folderName}>{folderName}</h1>
    </div>
  );
};

export default FolderInfo;
