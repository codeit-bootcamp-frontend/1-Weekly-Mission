import DeleteButton from "./DeleteButton";
import FolderAddButton from "./FolderAddButton";
import "./SelectMenu.css";
import React from "react";

function SelectMenu({ onClick, url }: KebabButtonProps) {
  return (
    <div className="select-menu">
      <DeleteButton onClick={onClick} url={url} />
      <FolderAddButton onClick={onClick} />
    </div>
  );
}

export default SelectMenu;
