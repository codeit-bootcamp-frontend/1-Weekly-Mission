import React, { ReactNode } from "react";
import styles from "./dialogButton.module.css";

interface DialogButtonProps {
  children?: ReactNode;
  isAddButton?: boolean;
  onClick?: () => void;
}

export default function DialogButton({
  children,
  isAddButton,
  onClick,
}: DialogButtonProps) {
  return (
    <div
      onClick={onClick}
      className={
        isAddButton
          ? `${styles.dialogButton} ${styles.addButton} `
          : `${styles.dialogButton} ${styles.deleteButton}`
      }
    >
      {children}
    </div>
  );
}
