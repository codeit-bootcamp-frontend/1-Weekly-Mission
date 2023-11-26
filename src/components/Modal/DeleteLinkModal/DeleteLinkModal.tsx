import { ReactNode } from "react";

import styles from "./DeleteLinkModal.module.css";

import ModalButton from "../ModalButton/ModalButton";
import ModalTitle from "../ModalTitle/ModalTitle";

interface Props {
  children: ReactNode;
}

function DeleteLinkModal({ children }: Props) {
  return (
    <div className={styles.deleteLinkModal}>
      <ModalTitle>링크 삭제</ModalTitle>
      <div className={styles.container}>
        <p className={styles.folderName}>{children}</p>
        <ModalButton color="red">삭제하기</ModalButton>
      </div>
    </div>
  );
}

export default DeleteLinkModal;
