import AddFolderModal from "src/commons/modals/AddFolderModal/AddFolderModal";
import styles from "./FolderMaker.module.scss";
import { ModalInterface } from "src/types";

interface Props {
  onClick: (m: ModalInterface) => void;
}

function FolderMaker({ onClick }: Props) {
  const handleFolderMaker = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if ((e.target as HTMLButtonElement).id === "folderCreateButton") {
      const newModal: ModalInterface = {
        component: <AddFolderModal />,
        show: true,
      };
      onClick(newModal);
    }
  };

  return (
    <div className={styles["container"]}>
      <button
        id="folderCreateButton"
        className={styles["folder-maker-button"]}
        onClick={handleFolderMaker}
      >
        폴더 추가 +
      </button>
    </div>
  );
}

export default FolderMaker;
