import "./FolderAddButton.css";
import React from "react";

function FolderAddButton({ onClick }: OnclickProps) {
  return (
    <button className="folderAdd" onClick={onClick} value="addFolder">
      폴더 추가 +
    </button>
  );
}

export default FolderAddButton;
