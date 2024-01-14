import { createPortal } from "react-dom";
import styles from "./modalWrapper.module.css";
import Image from "next/image";
import { MouseEvent, ReactNode } from "react";

const ModalWrapper = ({ children, handleToggle }: { children: ReactNode; handleToggle: (e: MouseEvent) => void }) => {
  const portalRoot = document.getElementById("modal-root") as HTMLElement;

  return createPortal(
    <div className={styles.root}>
      <div className={styles.relative}>
        <button onClick={handleToggle} type="button" className={styles.button}>
          <Image width={48} height={48} src="/icons/closeIcon.svg" alt="" />
        </button>
        <div className={styles.container}>{children}</div>
      </div>
    </div>,
    portalRoot
  );
};

export default ModalWrapper;
