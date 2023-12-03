import { ReactNode, MouseEventHandler } from "react";

import styles from "./ModalContainer.module.css";

import closeIcon from "@/assets/images/close.svg";
import Image from "next/image";

interface Props {
  onClose: () => void;
  children: ReactNode;
}

function ModalContainer({ onClose, children }: Props) {
  const handleOutSideClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalContainer} onClick={handleOutSideClick}>
      <div className={styles.modal}>
        {children}
        <Image
          className={styles.icon}
          src={closeIcon}
          alt="close"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default ModalContainer;
