import { useState } from "react";
import styled from "styled-components";
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
      <FolderWrapper>
        {/* 제목 버튼 */}
        <FolderNav
          folders={folders}
          selectedFolderId={selectedFolderId}
          handleClick={handleClick}
        />
        {/* 폴더 추가 */}
        <AddFolderButton />
      </FolderWrapper>

      <FolderWrapper>
        {/* 제목 부분 */}
        <FolderTitle>{selectedFolderName}</FolderTitle>
        {/* 추가 버튼 부분 */}
        {selectedFolderName !== "전체" && (
          <FunctionButton
            selectedFolderId={selectedFolderId}
            selectedFolderName={selectedFolderName}
          />
        )}
      </FolderWrapper>
    </>
  );
};

const FolderWrapper = styled.div`
  display: flex;
  width: 106rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1124px) {
    width: 70.4rem;
  }

  @media (max-width: 767px) and (min-width: 375px) {
    width: 34rem;
  }
`;

const FolderTitle = styled.div`
  color: var(--linkbrary-black);
  font-size: 2.4rem;
  font-weight: 600;
`;

export default FolderList;
