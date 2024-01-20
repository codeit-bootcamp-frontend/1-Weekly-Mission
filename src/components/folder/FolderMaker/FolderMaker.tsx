/*FolderMaker 컴포넌트:
  AddFolderModal 모달을 띄우는 버튼 컴포넌트.
  만약 화면의 크기가 tablet 미만이 되면 floating button 형태로 렌더링됨.
*/
import FolderAddModal from "@/modals/FolderAddModal/FolderAddModal";
import { useModalStore } from "@/store/ModalStore";

import styles from "./FolderMaker.module.scss";

function FolderMaker() {
  const isModalOpen = useModalStore((state) => state.isModalOpen);
  const modalName = useModalStore((state) => state.modalName);
  const showModal = useModalStore((state) => state.showModal);

  return (
    <div className={styles["container"]}>
      {isModalOpen && modalName === "FolderAddButton" && <FolderAddModal />}
      <button
        id="folderCreateButton"
        onClick={() => showModal("FolderAddButton")}
        className={styles["folder-maker-button"]}
      >
        폴더 추가 +
      </button>
    </div>
  );
}

export default FolderMaker;
