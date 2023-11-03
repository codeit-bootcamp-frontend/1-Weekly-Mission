import styles from "./ModalLayout.module.scss";
import { ReactComponent as CloseIcon } from "assets/images/close-modal-icon.svg";
import { useState } from "react";

function CloseButton() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <button className={styles["close-button"]} onchange={closeModal}>
      <CloseIcon />
    </button>
  );
}

function ModalLayout({ children, title = "" }) {
  return (
    <div className={styles["modal"]}>
      <div className={styles["modal-container"]}>
        <CloseButton />
        <p className={styles["title-section"]}>{title}</p>
        {children}
      </div>
    </div>
  );
}

export default ModalLayout;
