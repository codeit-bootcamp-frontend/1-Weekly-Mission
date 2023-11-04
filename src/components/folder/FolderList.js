import { useState } from "react";
import useGetFolders from "../../hooks/useGetFolders";
import FolderNav from "./FolderNav";
import AddFolderButton from "./AddFolderButton";
import FunctionButton from "./FunctionButton";

const FolderList = ({ onFolderSelect }) => {
  const folders = useGetFolders();
  const [selectedFolder, setSelectedFolder] = useState("전체");

  const handleClick = (folderId, folderName) => {
    if (folderId) {
      setSelectedFolder(folderName);
      onFolderSelect(folderId);
    } else {
      setSelectedFolder("전체");
      onFolderSelect(null, true);
    }
  };

  return (
    <>
      <div className="folder_wrapper">
        {/* 제목 버튼 */}
        <FolderNav
          folders={folders}
          selectedFolder={selectedFolder}
          handleClick={handleClick}
        />
        {/* 폴더 추가 */}
        <AddFolderButton />
      </div>

      <div className="folder_wrapper">
        {/* 제목 부분 */}
        <div className="folder_title">{selectedFolder}</div>
        {/* 추가 버튼 부분 */}
        {selectedFolder !== "전체" && (
          <FunctionButton selectedFolder={selectedFolder} />
        )}
      </div>
    </>
  );
};

export default FolderList;
