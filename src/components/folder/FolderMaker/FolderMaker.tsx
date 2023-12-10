/*FolderMaker 컴포넌트:
  AddFolderModal 모달을 띄우는 버튼 컴포넌트.
  만약 화면의 크기가 tablet 미만이 되면 floating button 형태로 렌더링됨.
*/

import { AddFolderModal } from "@/components/modals";
import { ModalInterface } from "@/types";
import styles from "./FolderMaker.module.scss";

function FolderMaker({ onClick }: { onClick: (m: ModalInterface) => void }) {
  const handleFolderCreateButton = (id: string) => {
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
          handleFolderCreateButton("folderCreateButton");
        }}
      >
        폴더 추가 +
      </button>
    </div>
  );
}

export default FolderMaker;
