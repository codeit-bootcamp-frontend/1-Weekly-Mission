import { PropsWithChildren } from "react";

import { useModalStore } from "@/store/ModalStore";

import styles from "./ModalBackground.module.scss";

/* 모달 뒤의 반투명한 검은 배경 컴포넌트 */
function ModalBackground() {
  const hideModal = useModalStore((state) => state.hideModal);

  return (
    <div onClick={() => hideModal()} className={styles["background"]}></div>
  );
}

/* 모달 공통 디자인 컴포넌트 */
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
