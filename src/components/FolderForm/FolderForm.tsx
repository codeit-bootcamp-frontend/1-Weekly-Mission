import "./FolderForm.css";
import React from "react";

interface FolderType {
  name: string;
  onClick: () => void;
}

function FolderForm({ name, onClick }: FolderType) {
  return (
    <button className="folder-name" onClick={onClick}>
      {name}
    </button>
  );
}

export default FolderForm;
