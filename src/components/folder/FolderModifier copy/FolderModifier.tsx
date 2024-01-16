/*FolderModifier 컴포넌트:
  각 folder의 수정, 삭제, 공유 버튼 컴포넌트로, 전체 폴더에선 렌더링되지 않음.
*/

import Image from "next/image";

import FolderDeleteModal from "@/modals/FolderDeleteModal/FolderDeleteModal";
import FolderEditModal from "@/modals/FolderEditModal/FolderEditModal";
import FolderShareModal from "@/modals/FolderShareModal/FolderShareModal";
import { useModalStore } from "@/store/useModalStore";

import styles from "./FolderModifier.module.scss";

interface FolderModifierProps {
  folderId: string;
  folderTitle: string;
}

function FolderTitle({ title }: { title: string }) {
  return <h1 className={styles["folder-title"]}>{title}</h1>;
}

function FolderModifier({ folderId, folderTitle }: FolderModifierProps) {
  const modalName = useModalStore((state) => state.modalName);
  const isModalOpen = useModalStore((state) => state.isModalOpen);
  const showModal = useModalStore((state) => state.showModal);

  const handleClickModalButton = (e: any) => {
    const id = e.target?.id;
    showModal(id);
  };

  return (
    <div className={styles["modifier-container"]}>
      {isModalOpen && modalName === "FolderDeleteModal" && (
        <FolderDeleteModal
          folderId={folderId}
          folderTitle={folderTitle ?? ""}
        />
      )}
      {isModalOpen && modalName === "FolderShareModal" && (
        <FolderShareModal folderTitle={folderTitle ?? ""} />
      )}
      {isModalOpen && modalName === "FolderEditModal" && (
        <FolderEditModal folderId={folderId} folderTitle={folderTitle ?? ""} />
      )}
      <FolderTitle title={folderTitle ?? ""} />
      <div>
        <div className={styles["button-modifier"]}>
          <button id="FolderShareModal" onClick={handleClickModalButton}>
            <Image
              src="/icons/share-icon.svg"
              width={19}
              height={19}
              alt="share icon"
            />
            공유
          </button>
          <button id="FolderEditModal" onClick={handleClickModalButton}>
            <Image
              src="/icons/rename-icon.svg"
              width={19}
              height={19}
              alt="share icon"
            />
            이름 변경
          </button>
          <button id="FolderDeleteModal" onClick={handleClickModalButton}>
            <Image
              src="/icons/delete-icon.svg"
              width={19}
              height={19}
              alt="share icon"
            />
            삭제
          </button>
        </div>
      </div>
    </div>
  );
}

export default FolderModifier;
