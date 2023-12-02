import styles from "styles/FolderInfo.module.css";

function FolderInfo({ folderInfo }) {
  if (!folderInfo) return null;

  const { name: folderName } = folderInfo;
  const { name, profileImageSource } = folderInfo.owner;

  return (
    <div className={styles.folderInfo}>
      <img
        className={styles.folderProfile}
        src={profileImageSource}
        alt="유저 폴더 파일"
      />
      <span className={styles.folderUserName}>{name}</span>
      <span className={styles.folderName}>{folderName}</span>
    </div>
  );
}

export default FolderInfo;
