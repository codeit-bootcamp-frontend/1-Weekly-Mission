import React from "react";

const DialogMain = ({ children }) => {
  return <div className="dialog">{children}</div>;
};

const DialogTitle = ({ children }) => {
  return <h2>{children}</h2>;
};

const DialogCloseButton = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

DialogMain.Title = DialogTitle;
DialogMain.CloseButton = DialogCloseButton;

export default DialogMain;
