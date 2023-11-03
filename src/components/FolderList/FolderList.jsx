import React, { useState } from "react";
import { S } from "./FolderListStyle"; // Import the styles as S
import SelectedFolder from "../SelectedFolder";

const DEFAULT_FOLDER = {
  id: 0,
  name: "전체",
};

function FolderList({ folders, setFolderLink, selectedFolderId }) {
  const [selectedFolder, setSelectedFolder] = useState(DEFAULT_FOLDER); 

  const onClick = (folder) => (e) => {
    if (!folder) {
      setFolderLink(undefined);
      setSelectedFolder(DEFAULT_FOLDER);
    } else {
      setFolderLink(folder.id);
      setSelectedFolder(folder);
    }
  };

  return (
    <>
      <S.ButtonContainer>
        <S.FolderButtons>
          <S.Button
            onClick={onClick(undefined)}
            data-onselect={selectedFolderId === undefined}
          >
            {DEFAULT_FOLDER.name}
          </S.Button>
          {folders.length !== 0 &&
            folders.map((folder) => (
              <S.Button
                onClick={onClick(folder)}
                key={folder.id}
                data-onselect={selectedFolderId === folder.id}
              >
                {folder.name}
              </S.Button>
            ))}
        </S.FolderButtons>
        <S.AddFolder>폴더 추가 +</S.AddFolder>
      </S.ButtonContainer>

      <SelectedFolder folderName={selectedFolder?.name} />
    </>
  );
}

export default FolderList;
