import React, { useEffect } from "react";
import { requestSingleFolderApi } from "../../api/singleFolderApi";

const FolderListItem = ({ data, handleFolderClick }) => {
  const { id, name } = data;
  return (
    <button
      className="folder-list-button"
      onClick={() => {
        handleFolderClick(id, name);
      }}
    >
      {name}
    </button>
  );
};

export default FolderListItem;
