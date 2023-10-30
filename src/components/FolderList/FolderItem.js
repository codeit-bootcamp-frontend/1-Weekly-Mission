import React from "react";

function FolderItem({ id, name, onFolderClick }) {
  return (
    <div className="folder-item" onClick={() => onFolderClick(id, name)}>
      {name}
    </div>
  );
}

export default FolderItem;
