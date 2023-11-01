import styles from "./FolderInfoSkeleton.module.css";

const FolderInfoSkeleton = () => {
  return (
    <div className={styles.FolderInfoSkeleton}>
      <div className={styles.frame}></div>
      <div className={styles.profile_info}>
        <div className={styles.profile_img}></div>
        <div className={styles.owner_name}></div>
      </div>
      <div className={styles.folder_name}></div>
    </div>
  );
};

export default FolderInfoSkeleton;
