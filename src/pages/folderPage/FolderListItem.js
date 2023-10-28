import React from "react";

const FolderListItem = ({
  data,
  handleFolderClick,
  isSelected,
  handleButtonClick,
  isTotalClicked,
}) => {
  const { id, name } = data;
  return (
    <button
      className={`folder-list-button ${
        !isTotalClicked && isSelected ? "selected" : ""
      }`}
      onClick={() => {
        handleFolderClick(id, name);
        handleButtonClick(id);
      }}
    >
      {name}
    </button>
  );
};

export default FolderListItem;
