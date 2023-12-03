import React from "react";

interface Link {
  count: number;
}

interface SingleData {
  created_at: string;
  id: number;
  link: Link;
  name: string;
  user_id: number;
}

interface Props {
  data: SingleData;
  handleFolderClick: (folderId: unknown, folderName: string) => void;
  isSelected: boolean;
  handleButtonClick: (id: number) => void;
  isTotalClicked: boolean;
}

const FolderListItem = ({
  data,
  handleFolderClick,
  isSelected,
  handleButtonClick,
  isTotalClicked,
}: Props) => {
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
