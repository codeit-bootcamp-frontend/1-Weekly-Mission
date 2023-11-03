import styles from "./FolderModifier.module.scss";
import { ReactComponent as ShareIcon } from "assets/images/share-icon.svg";
import { ReactComponent as RenameIcon } from "assets/images/rename-icon.svg";
import { ReactComponent as DeleteIcon } from "assets/images/delete-icon.svg";

function FolderModifier() {
  return (
    <div className={styles["button-modifier"]}>
      <button>
        <ShareIcon />
        공유
      </button>
      <button>
        <RenameIcon />
        이름 변경
      </button>
      <button>
        <DeleteIcon />
        삭제
      </button>
    </div>
  );
}

export default FolderModifier;
