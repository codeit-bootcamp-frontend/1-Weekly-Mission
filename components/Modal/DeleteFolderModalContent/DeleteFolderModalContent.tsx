import { ReactNode } from "react";

import styles from "./DeleteFolderModalContent.module.css";

import ModalButton from "../ModalButton/ModalButton";
import ModalTitle from "../ModalTitle/ModalTitle";

interface Props {
  children: ReactNode;
}

function DeleteFolderModalContent({ children }: Props) {
  return (
    <div className={styles.deleteFolderModal}>
      <ModalTitle>폴더 삭제</ModalTitle>
      <div className={styles.container}>
        <p className={styles.folderName}>{children}</p>
        <ModalButton color="red">삭제하기</ModalButton>
      </div>
    </div>
  );
}

export default DeleteFolderModalContent;
