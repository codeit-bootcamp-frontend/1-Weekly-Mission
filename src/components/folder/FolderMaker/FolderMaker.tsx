/*FolderMaker 컴포넌트:
  AddFolderModal 모달을 띄우는 버튼 컴포넌트.
  만약 화면의 크기가 tablet 미만이 되면 floating button 형태로 렌더링됨.
*/
import { useState } from "react";

import styles from "./FolderMaker.module.scss";
import FolderAddModal from "@/modals/FolderAddModal/FolderAddModal";

function FolderMaker() {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setTimeout(() => setIsOpen(false), 200);
  };

  return (
    <div className={styles["container"]}>
      {isOpen && <FolderAddModal onBlur={closeModal} />}
      <button
        id="folderCreateButton"
        onClick={() => setIsOpen(true)}
        className={styles["folder-maker-button"]}
      >
        폴더 추가 +
      </button>
    </div>
  );
}

export default FolderMaker;
