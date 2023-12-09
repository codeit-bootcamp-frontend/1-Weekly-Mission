import styles from "./FolderModifier.module.scss";
import { FolderInterface, ModalInterface } from "@/types";
import Image from "next/image";
import {
  DeleteFolderModal,
  RenameFolderModal,
  ShareFolderModal,
} from "@/components/modals";

function FolderTitle({ title }: { title: string }) {
  return <h1 className={styles["folder-title"]}>{title}</h1>;
}

function FolderModifier({
  folder,
  onClick,
}: {
  folder: FolderInterface;
  onClick: (m: ModalInterface) => void;
}) {
  const handleFolderModifier = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if ((e.target as HTMLButtonElement).id === "folderShareButton") {
      const newModal = {
        component: <ShareFolderModal folder={folder} />,
        show: true,
      };
      onClick(newModal);
    }
    if ((e.target as HTMLButtonElement).id === "folderRenameButton") {
      const newModal = {
        component: <RenameFolderModal folder={folder} />,
        show: true,
      };
      onClick(newModal);
    }
    if ((e.target as HTMLButtonElement).id === "folderDeleteButton") {
      const newModal = {
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
              <Image
                src="icons/share-icon.svg"
                width={19}
                height={19}
                alt="share icon"
              />
              공유
            </button>
            <button id="folderRenameButton" onClick={handleFolderModifier}>
              <Image
                src="icons/rename-icon.svg"
                width={19}
                height={19}
                alt="share icon"
              />
              이름 변경
            </button>
            <button id="folderDeleteButton" onClick={handleFolderModifier}>
              <Image
                src="icons/delete-icon.svg"
                width={19}
                height={19}
                alt="share icon"
              />
              삭제
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FolderModifier;
