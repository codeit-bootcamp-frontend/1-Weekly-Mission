import { useState } from "react";
import "../../styles/landing.css";
import FolderListItem from "./FolderListItem";

const FolderList = ({ fullData, handleFolderClick, isTotalClicked }) => {
  const [selectedFolder, setSelectedFolder] = useState(null);

  const handleButtonClick = (id) => {
    setSelectedFolder(id);
  };

  return (
    <>
      {fullData.map((data) => (
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
