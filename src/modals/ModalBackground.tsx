import { PropsWithChildren } from "react";

import { useModalStore } from "@/store/ModalStore";

import styles from "./ModalBackground.module.scss";

function ModalBackground() {
  const hideModal = useModalStore((state) => state.hideModal);

  return (
    <div onClick={() => hideModal()} className={styles["background"]}></div>
  );
}

function ModalContainer({ children }: PropsWithChildren) {
  const hideModal = useModalStore((state) => state.hideModal);

  return (
    <div className={styles["container"]}>
      <div className={styles["modal-content"]}>
        <button className={styles["close-button"]} onClick={() => hideModal()}>
          x
        </button>
        {children}
      </div>
    </div>
  );
}

export { ModalBackground, ModalContainer };
