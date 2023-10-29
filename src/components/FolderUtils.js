import styles from "../styles/FolderUtils.module.css";
import CurrentFolder from "./CurrentFolder";
import FolderEdit from "./FolderEdit";

const FolderUtils = ({ userId, currentFolderName = "전체" }) => {
  if (!userId) return;

  return (
    <div className={styles.FolderUtils}>
      <div className={styles.container}>
        <CurrentFolder>{currentFolderName}</CurrentFolder>
        <FolderEdit />
      </div>
    </div>
  );
};

export default FolderUtils;
