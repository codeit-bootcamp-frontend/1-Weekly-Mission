import styles from "./FolderModifier.module.scss";
import { ReactComponent as ShareIcon } from "src/assets/images/share-icon.svg";
import { ReactComponent as RenameIcon } from "src/assets/images/rename-icon.svg";
import { ReactComponent as DeleteIcon } from "src/assets/images/delete-icon.svg";
import { FolderInterface, ModalInterface } from "src/types";
import DeleteFolderModal from "src/commons/modals/DeleteFolderModal/DeleteFolderModal";
import RenameFolderModal from "src/commons/modals/RenameFolderModal/RenameFolderModal";
import ShareFolderModal from "src/commons/modals/ShareFolderModal/ShareFolderModal";

interface FolderTitleProps {
  title: string;
}
interface FolderModifierProps {
  folder: FolderInterface;
  onClick: (m: ModalInterface) => void;
}

function FolderTitle({ title }: FolderTitleProps) {
  return <h1 className={styles["folder-title"]}>{title}</h1>;
}

function FolderModifier({ folder, onClick }: FolderModifierProps) {
  const handleFolderModifier = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if ((e.target as HTMLButtonElement).id === "folderShareButton") {
      const newModal: ModalInterface = {
        component: <ShareFolderModal folder={folder} />,
        show: true,
      };
      onClick(newModal);
    }
    if ((e.target as HTMLButtonElement).id === "folderRenameButton") {
      const newModal: ModalInterface = {
        component: <RenameFolderModal folder={folder} />,
        show: true,
      };
      onClick(newModal);
    }
    if ((e.target as HTMLButtonElement).id === "folderDeleteButton") {
      const newModal: ModalInterface = {
        component: <DeleteFolderModal folder={folder} />,
        show: true,
      };
      onClick(newModal);
    } else {
      return;
    }
  };

  return (
    <div className={styles["modifier-container"]}>
      <FolderTitle title={folder.name} />

      {folder.name !== "전체" && (
        <div>
          <div className={styles["button-modifier"]}>
            <button id="folderShareButton" onClick={handleFolderModifier}>
              <ShareIcon />
              공유
            </button>
            <button id="folderRenameButton" onClick={handleFolderModifier}>
              <RenameIcon />
              이름 변경
            </button>
            <button id="folderDeleteButton" onClick={handleFolderModifier}>
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
