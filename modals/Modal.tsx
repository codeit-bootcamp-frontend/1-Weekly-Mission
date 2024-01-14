import styles from "./Modal.module.css";
import { Children, Dispatch, FormEvent, MouseEvent, ReactNode, SetStateAction } from "react";
import Image from "next/image";
import { FolderInfo } from "@/API/getCurrentUsersFolderData";
import AddFolder from "./AddFolder";

interface Props {
  onClick: (e: MouseEvent | FormEvent) => void;
  children: ReactNode;
}

function Modal({ onClick, children }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.relative}>
        <button onClick={onClick} type="button" className={styles.button}>
          <Image width={48} height={48} src="/images/icon/common-icons/closeIcon.svg" alt="" />
        </button>
        <div className={styles.container}>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
