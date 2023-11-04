import disableScroll from "commons/utils/disableScroll";
import styles from "./ModalLayout.module.scss";
import { useEffect } from "react";
import enableScroll from "commons/utils/enableScroll";

function ModalLayout({ onClose, children }) {
  useEffect(() => {
    disableScroll();
    return () => enableScroll();
  }, []);
  return (
    <div className={styles["container"]}>
      <div className={styles["modal-container"]}>{children}</div>
      <div className={styles["modal-background"]} onClick={onClose}></div>
    </div>
  );
}

export default ModalLayout;
