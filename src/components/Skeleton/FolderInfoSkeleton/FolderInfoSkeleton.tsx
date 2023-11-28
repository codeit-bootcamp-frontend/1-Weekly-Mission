import styles from "./FolderInfoSkeleton.module.css";

const FolderInfoSkeleton = () => {
  return (
    <div className={styles.folderInfoSkeleton}>
      <div className={styles.profileInfo}>
        <div className={styles.profileImg}></div>
        <div className={styles.ownerName}></div>
      </div>
      <div className={styles.folderName}></div>
    </div>
  );
};

export default FolderInfoSkeleton;
