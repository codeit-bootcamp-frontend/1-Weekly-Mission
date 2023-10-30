import React from "react";
import "./FolderItem.css";

function FolderItem({ id, name, onFolderClick }) {
  return (
    <div className="folder-item" onClick={() => onFolderClick(id)}>
      {name}
    </div>
  );
}

export default FolderItem;
