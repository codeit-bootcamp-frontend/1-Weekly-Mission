import styles from "./ModalLayout.module.scss";
import { ReactComponent as CloseIcon } from "assets/images/close-modal-icon.svg";

function CloseButton() {
  return (
    <button className={styles["close-button"]}>
      <CloseIcon />
    </button>
  );
}

function ModalLayout({ children, title = "", description = "" }) {
  return (
    // <div className={styles["wrapper"]}>
    <div className={styles["modal"]}>
      <div className={styles["modal-container"]}>
        <CloseButton />
        <p className={styles["title-section"]}>{title}</p>
        {description && (
          <p className={styles["description-section"]}>{description}</p>
        )}
        {children}
      </div>
    </div>
    // </div>
  );
}

export default ModalLayout;
