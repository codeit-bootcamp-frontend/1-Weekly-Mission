import styles from "./FolderModifier.module.scss";
import { ReactComponent as ShareIcon } from "assets/images/share-icon.svg";
import { ReactComponent as RenameIcon } from "assets/images/rename-icon.svg";
import { ReactComponent as DeleteIcon } from "assets/images/delete-icon.svg";
function FolderModifier() {
  const handleBack = () => {};
  return (
    <div className={styles["button-modifier"]}>
      <button id="folderShareButton" onClick={handleBack}>
        <ShareIcon />
        공유
      </button>
      <button id="folderRenameButton" onClick={handleBack}>
        <RenameIcon />
        이름 변경
      </button>
      <button id="folderDeleteButton" onClick={handleBack}>
        <DeleteIcon />
        삭제
      </button>
    </div>
  );
}

export default FolderModifier;
