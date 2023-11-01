import React from "react";
import "./FolderItem.css";

const FolderItem = ({ id, name, onFolderClick }) => (
  <div className="folder-item" onClick={() => onFolderClick(id)}>
    {name}
  </div>
);

export default FolderItem;
