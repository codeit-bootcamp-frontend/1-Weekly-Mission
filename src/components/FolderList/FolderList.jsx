import React, { useState } from "react";
import { S } from "./FolderListStyle"; // Import the styles as S

import shareIcon from "../../assets/share.png";
import modifyIcon from "../../assets/pen.png";
import deleteIcon from "../../assets/deleteIcon.png";
import Modal from "../Modal/Modal";
const DEFAULT_FOLDER = {
  id: 0,
  name: "전체",
};

function FolderList({ folders, setFolderLink, selectedFolderId }) {
  const [selectedFolder, setSelectedFolder] = useState(DEFAULT_FOLDER);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
        <S.AddFolderButton>폴더 추가 +</S.AddFolderButton>
      </S.ButtonContainer>

      <S.FolderInfoContainer>
        <S.FolderName>{selectedFolder?.name} </S.FolderName>
        {selectedFolder?.name !== "전체" && (
          <S.Icons>
            <Icon
              img={shareIcon}
              feature={"공유"}
              onClick={() => setIsModalOpen(true)}
            />
            <Icon
              img={modifyIcon}
              feature={"이름 변경"}
              onClick={() => setIsModalOpen(true)}
            />
            <Icon img={deleteIcon} feature={"삭제"} />
          </S.Icons>
        )}
      </S.FolderInfoContainer>

      <Modal
        title="폴더 삭제"
        buttonText="삭제하기"
        isModalOpen={isModalOpen}
      ></Modal>
    </>
  );
}

function Icon({ img, feature }) {
  return (
    <S.StyledIcon>
      <img src={img}></img>
      <div>{feature}</div>
    </S.StyledIcon>
  );
}
export default FolderList;
