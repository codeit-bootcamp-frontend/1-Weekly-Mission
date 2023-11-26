import { ReactNode } from "react";
import classNames from "classnames";

import styles from "./ModalButton.module.css";

interface Props {
  color: "red" | "blue";
  children: ReactNode;
}

function ModalButton({ color, children }: Props) {
  return (
    <button
      className={classNames(
        styles.modalButton,
        color === "blue" ? styles.blue : styles.red
      )}
    >
      {children}
    </button>
  );
}

export default ModalButton;
