import shareIcon from "../../assets/images/share.svg";
import penIcon from "../../assets/images/pen.svg";
import binIcon from "../../assets/images/bin.svg";
import styles from "./FolderEdit.module.css";
import { MouseEvent } from "react";

interface Props {
  shareModal: (e: MouseEvent) => void;
  deleteModal: (e: MouseEvent) => void;
  editModal: (e: MouseEvent) => void;
}

function FolderEdit({ shareModal, deleteModal, editModal }: Props) {
  return (
    <div className={styles.root}>
      <button className={styles.button} onClick={shareModal}>
        <img src={shareIcon} alt="" />
        공유
      </button>
      <button className={styles.button} onClick={editModal}>
        <img src={penIcon} alt="" />
        이름 변경
      </button>
      <button className={styles.button} onClick={deleteModal}>
        <img src={binIcon} alt="" />
        삭제
      </button>
    </div>
  );
}

export default FolderEdit;
