import Image from "next/image";
import {
  DeleteFolderModal,
  RenameFolderModal,
  ShareFolderModal,
} from "@/components/modals";
import { FolderInterface, ModalInterface } from "@/types";
import styles from "./FolderModifier.module.scss";

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
  const handleFolderModifier = (id: string) => {
    if (id === "folderShareButton") {
      const newModal = {
        component: <ShareFolderModal folder={folder} />,
        show: true,
      };
      onClick(newModal);
    }
    if (id === "folderRenameButton") {
      const newModal = {
        component: <RenameFolderModal folder={folder} />,
        show: true,
      };
      onClick(newModal);
    }
    if (id === "folderDeleteButton") {
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
            <button
              id="folderShareButton"
              onClick={() => {
                handleFolderModifier("folderShareButton");
              }}
            >
              <Image
                src="icons/share-icon.svg"
                width={19}
                height={19}
                alt="share icon"
              />
              공유
            </button>
            <button
              id="folderRenameButton"
              onClick={() => {
                handleFolderModifier("folderRenameButton");
              }}
            >
              <Image
                src="icons/rename-icon.svg"
                width={19}
                height={19}
                alt="share icon"
              />
              이름 변경
            </button>
            <button
              id="folderDeleteButton"
              onClick={() => {
                handleFolderModifier("folderDeleteButton");
              }}
            >
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
