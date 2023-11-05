import styles from "./ModalButton.module.css";
import classNames from "classnames";

function ModalButton({ color, children }) {
  return (
    <button className={classNames(styles.modalButton, color === "blue" ? styles.blue : styles.red)}>{children}</button>
  );
}

export default ModalButton;
