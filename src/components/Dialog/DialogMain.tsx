import React, { ReactNode } from "react";

interface DialogProps {
  children: ReactNode;
}
const DialogMain = ({ children }: DialogProps) => {
  return <div className="dialog">{children}</div>;
};

const DialogTitle = ({ children }: DialogProps) => {
  return <h2>{children}</h2>;
};

interface DialogCloseButtonProps extends DialogProps {
  onClick: () => void;
}

const DialogCloseButton = ({ onClick, children }: DialogCloseButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};

DialogMain.Title = DialogTitle;
DialogMain.CloseButton = DialogCloseButton;

export default DialogMain;
