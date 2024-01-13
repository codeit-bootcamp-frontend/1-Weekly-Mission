import { ReactNode } from "react";
import classNames from "classnames";

import styles from "./ModalButton.module.css";

interface Props {
  color: "red" | "blue";
  children: ReactNode;
  onClick: () => void;
}

function ModalButton({ color, children, onClick }: Props) {
  return (
    <button
      className={classNames(
        styles.modalButton,
        color === "blue" ? styles.blue : styles.red
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ModalButton;
