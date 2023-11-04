import { useState } from "react";
import useGetFolders from "../../hooks/useGetFolders";
import FolderNav from "./FolderNav";
import AddFolderButton from "./AddFolderButton";
import FunctionButton from "./FunctionButton";

const FolderList = ({ onFolderSelect }) => {
  const folders = useGetFolders();
  const [selectedFolderName, setSelectedFolderName] = useState("전체");
  const [selectedFolderId, setSelectedFolderId] = useState(null);

  const handleClick = (folderId, folderName) => {
    if (folderId) {
      setSelectedFolderName(folderName);
      setSelectedFolderId(folderId);
      onFolderSelect(folderId);
    } else {
      setSelectedFolderName("전체");
      setSelectedFolderId(null);
      onFolderSelect(null, true);
    }
  };

  return (
    <>
      <div className="folder_wrapper">
        {/* 제목 버튼 */}
        <FolderNav
          folders={folders}
          selectedFolderId={selectedFolderId}
          handleClick={handleClick}
        />
        {/* 폴더 추가 */}
        <AddFolderButton />
      </div>

      <div className="folder_wrapper">
        {/* 제목 부분 */}
        <div className="folder_title">{selectedFolderName}</div>
        {/* 추가 버튼 부분 */}
        {selectedFolderName !== "전체" && (
          <FunctionButton
            selectedFolderId={selectedFolderId}
            selectedFolderName={selectedFolderName}
          />
        )}
      </div>
    </>
  );
};

export default FolderList;
