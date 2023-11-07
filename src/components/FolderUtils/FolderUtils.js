import styles from "./FolderUtils.module.css";

const FolderUtils = ({ children }) => {
  return (
    <div className={styles.folderUtils}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default FolderUtils;
