import styles from "./FolderMaker.module.scss";
import { AddFolderModal } from "@/components/modals";
import { ModalInterface } from "@/types";

function FolderMaker({ onClick }: { onClick: (m: ModalInterface) => void }) {
  const handleFolderMaker = (id: string) => {
    if (id === "folderCreateButton") {
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
        onClick={() => {
          handleFolderMaker("folderCreateButton");
        }}
      >
        폴더 추가 +
      </button>
    </div>
  );
}

export default FolderMaker;
