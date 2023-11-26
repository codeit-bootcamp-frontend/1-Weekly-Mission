import React, { ReactNode } from "react";
import "./dialogButton.css";

interface DialogButtonProps {
  children?: ReactNode;
  isAddButton?: boolean;
}

export default function DialogButton({
  children,
  isAddButton,
}: DialogButtonProps) {
  return (
    <div className={isAddButton ? "dialog-button add" : "dialog-button delete"}>
      {children}
    </div>
  );
}
