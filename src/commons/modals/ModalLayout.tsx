import styles from "./ModalLayout.module.scss";
import { useEffect, ReactNode } from "react";
import enableScroll from "../utils/enableScroll";
import disableScroll from "../utils/disableScroll";

interface Props {
  onClose: () => void;
  children: ReactNode;
}
function ModalLayout({ onClose, children }: Props) {
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
