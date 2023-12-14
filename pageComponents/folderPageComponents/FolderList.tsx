import { useState } from "react";
import FolderListItem from "./FolderListItem";

const FolderList = ({
  fullData,
  handleFolderClick,
  isTotalClicked,
  folderId,
}: FolderListProps) => {
  const [selectedFolder, setSelectedFolder] = useState<number>(folderId);

  const handleButtonClick = (id: number) => {
    setSelectedFolder(id);
  };

  return (
    <>
      {fullData &&
        fullData.map((data) => (
          <FolderListItem
            key={data?.id}
            data={data}
            handleFolderClick={handleFolderClick}
            isSelected={selectedFolder === data?.id}
            handleButtonClick={handleButtonClick}
            isTotalClicked={isTotalClicked}
          />
        ))}
    </>
  );
};

export default FolderList;
