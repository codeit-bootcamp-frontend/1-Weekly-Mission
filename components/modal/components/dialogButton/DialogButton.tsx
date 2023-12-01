import React, { ReactNode } from "react";
import styles from "./dialogButton.module.css";

interface DialogButtonProps {
  children?: ReactNode;
  isAddButton?: boolean;
}

export default function DialogButton({
  children,
  isAddButton,
}: DialogButtonProps) {
  return (
    <div className={isAddButton ? styles.addButton : styles.deleteButton}>
      {children}
    </div>
  );
}
