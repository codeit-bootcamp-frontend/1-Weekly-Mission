import styles from "./FolderModifier.module.scss";
import { ReactComponent as ShareIcon } from "src/assets/images/share-icon.svg";
import { ReactComponent as RenameIcon } from "src/assets/images/rename-icon.svg";
import { ReactComponent as DeleteIcon } from "src/assets/images/delete-icon.svg";
import { FolderInterface } from "src/types";

interface FolderTitleProps {
  title: string;
}
interface FolderModifierProps {
  folder: FolderInterface;
}

function FolderTitle({ title }: FolderTitleProps) {
  return <h1 className={styles["folder-title"]}>{title}</h1>;
}

function FolderModifier({ folder }: FolderModifierProps) {
  return (
    <div className={styles["modifier-container"]}>
      <FolderTitle title={folder.name} />

      {folder.name !== "전체" && (
        <div>
          <div className={styles["button-modifier"]}>
            <button id="folderShareButton">
              <ShareIcon />
              공유
            </button>
            <button id="folderRenameButton">
              <RenameIcon />
              이름 변경
            </button>
            <button id="folderDeleteButton">
              <DeleteIcon />
              삭제
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FolderModifier;
