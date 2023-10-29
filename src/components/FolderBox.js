import React, { useState } from "react";

function FolderBox({ item, onClick, isSelected }) {
  return (
    <div
      className={isSelected ? "folderbox-selected" : "folderbox"}
      onClick={onClick}
    >
      <p>{item}</p>
    </div>
  );
}

export default FolderBox;
