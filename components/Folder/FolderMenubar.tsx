import { useState } from "react";
import styled from "styled-components";

import { FOLDER_OPTION_NAMES, MODAL_NAME } from "../../constants/constant";
import ModalFolderRename from "../Modal/ModalFolderRename";
import ModalFolderDelete from "../Modal/ModalFolderDelete";
import ModalShare from "../Modal/ModalShare";

interface FolderOptionsItemProps {
  item: {
    name: string;
    optionImg: string;
  };
  selectedFolderName: string;
}

interface FolderMenuBarProps {
  selectedFolderName: string;
}

const FolderOptionsItem = ({
  item,
  selectedFolderName,
}: FolderOptionsItemProps) => {
  const { name, optionImg: OptionImage } = item;
  const [renameModalOpen, setRenameModalOpen] = useState(false);
  const [deleteFolderModalOpen, setDeleteFolderModalOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  const handleModalClick = () => {
    if (name === "공유") {
      setShareModalOpen(true);
    } else if (name === "이름 변경") {
      setRenameModalOpen(true);
    } else if (name === "삭제") {
      setDeleteFolderModalOpen(true);
    }
  };
  return (
    <>
      <StyledFolderOptionItemBox onClick={handleModalClick}>
        <OptionImage />
        <p>{name}</p>
      </StyledFolderOptionItemBox>
      <ModalFolderRename
        modalOpen={renameModalOpen}
        title={MODAL_NAME["edit"]["title"]}
        btnColor={MODAL_NAME["edit"]["buttonColor"]}
        btnText={MODAL_NAME["edit"]["buttonText"]}
        setModalOpen={setRenameModalOpen}
        name={selectedFolderName}
      />
      <ModalFolderDelete
        modalOpen={deleteFolderModalOpen}
        title={MODAL_NAME["deleteFolder"]["title"]}
        btnColor={MODAL_NAME["deleteFolder"]["buttonColor"]}
        btnText={MODAL_NAME["deleteFolder"]["buttonText"]}
        name={selectedFolderName}
        setModalOpen={setDeleteFolderModalOpen}
      />
      <ModalShare
        modalOpen={shareModalOpen}
        title={MODAL_NAME["share"]["title"]}
        name={selectedFolderName}
        setModalOpen={setShareModalOpen}
      />
    </>
  );
};

// "공유", "이름 변경", "삭제"
const FolderOptions = ({
  selectedFolderName,
}: {
  selectedFolderName: string;
}) => {
  return (
    <StyledFolderOptionsBox>
      {FOLDER_OPTION_NAMES.map((item) => (
        <FolderOptionsItem
          key={item.id}
          item={item}
          selectedFolderName={selectedFolderName}
        />
      ))}
    </StyledFolderOptionsBox>
  );
};

const FolderMenubar = ({ selectedFolderName }: FolderMenuBarProps) => {
  return (
    <>
      <StyledFolderNameHeader>{selectedFolderName}</StyledFolderNameHeader>
      {selectedFolderName !== "전체" ? (
        <FolderOptions selectedFolderName={selectedFolderName} />
      ) : null}
    </>
  );
};

export default FolderMenubar;

const StyledFolderOptionItemBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  &:hover {
    text-decoration: underline;
    text-decoration-color: gray;
  }

  img {
    display: flex;
    width: 1.8rem;
    height: 1.8rem;
    padding: 0.12rem 0.15rem 0.1rem 0.15rem;
    justify-content: center;
    align-items: center;
  }

  p {
    color: var(--linkbrary-gray-60);
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const StyledFolderOptionsBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
`;

const StyledFolderNameHeader = styled.h1`
  color: #000;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;
