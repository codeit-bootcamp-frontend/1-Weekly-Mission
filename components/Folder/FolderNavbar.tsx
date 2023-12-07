import styled from "styled-components";
import Link from "next/link";

import FolderAddImage from "@/public/images/folder-add.svg";
import FolderAddWhiteImage from "@/public/images/folder-add-white.svg";
import { DEFAULT_FOLDER, MODAL_NAME } from "../../constants/constant";
import { useState } from "react";
import ModalFolderCreate from "../Modal/ModalFolderCreate";

interface FolderItem {
  name: string;
  id: number;
}

interface FolderProps {
  data: FolderItem;
  selected: boolean;
  folderId: string;
}

interface FolderListProps {
  data: FolderItem[];
  currentFolderId: string | string[] | undefined;
}

interface FolderNavbarProps {
  folderData: FolderItem[];
  currentFolderId: string | string[] | undefined;
}

const Folder = ({ data, selected, folderId }: FolderProps) => {
  const { name } = data;

  return (
    <Link href={`/folder/${folderId}`}>
      <StyledFolderBox selected={selected}>
        <StyledFolderBoxText>{name}</StyledFolderBoxText>
      </StyledFolderBox>
    </Link>
  );
};

const FolderList = ({ data, currentFolderId }: FolderListProps) => {
  return (
    <>
      <Folder
        data={DEFAULT_FOLDER}
        selected={currentFolderId === null || currentFolderId === "all"}
        folderId="all"
      />
      {data.map((item) => (
        <Folder
          key={item.id}
          data={item}
          selected={String(currentFolderId) === String(item.id)}
          folderId={String(item.id)}
        />
      ))}
    </>
  );
};

const FolderAddBtn = () => {
  const [addFolderModalOpen, setAddFolderModalOpen] = useState(false);
  return (
    <>
      <StyledFolderAddBox onClick={() => setAddFolderModalOpen(true)}>
        <StyledFolderAddText>폴더 추가</StyledFolderAddText>
        <StyledFolderAddImage alt="폴더 추가" />
        <StyledFolderAddWhiteImage alt="폴더 추가(흰색)" />
      </StyledFolderAddBox>
      <ModalFolderCreate
        modalOpen={addFolderModalOpen}
        title={MODAL_NAME["addFolder"]["title"]}
        btnColor={MODAL_NAME["addFolder"]["buttonColor"]}
        btnText={MODAL_NAME["addFolder"]["buttonText"]}
        setModalOpen={setAddFolderModalOpen}
      />
    </>
  );
};

const FolderNavbar = ({ folderData, currentFolderId }: FolderNavbarProps) => {
  if (!!!folderData) return null;

  return (
    <>
      <StyledFolderListBox>
        <StyledFolderListInnerBox>
          <FolderList data={folderData} currentFolderId={currentFolderId} />
        </StyledFolderListInnerBox>
      </StyledFolderListBox>
      <FolderAddBtn />
    </>
  );
};

export default FolderNavbar;

const StyledFolderBox = styled.div<{ selected: boolean }>`
  cursor: pointer;
  display: flex;
  padding: 0.8rem 1.2rem;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--linkbrary-primary-color);
  background-color: ${({ selected }) =>
    selected ? "var(--linkbrary-primary-color);" : "#fff"};
  color: ${({ selected }) => (selected ? "#fff" : "#000")};

  &:hover {
    border: 1px solid var(--linkbrary-primary-color);
    background: var(--linkbrary-primary-color);
    color: #fff;
  }
`;

const StyledFolderBoxText = styled.p`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (max-width: 1124px) {
    font-size: 1rem;
    font-weight: 500;
  }

  @media screen and (max-width: 767px) {
    font-size: 1rem;
    display: flex;
  }
`;

const StyledFolderAddBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: flex;
    position: fixed;
    padding: 8px 16px;
    align-items: flex-start;
    gap: 0.8rem;
    right: 38%;
    bottom: 10.1rem;
    transition: 0.5s;
    z-index: 2;
    /* bottom: -1.2rem; */
    border-radius: 20px;
    border: 1px solid var(--linkbrary-white);
    background: var(--linkbrary-primary-color);
    color: var(--linkbrary-white);
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledFolderAddText = styled.p`
  color: #6d6afe;
  text-align: center;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.03rem;

  @media screen and (max-width: 1124px) {
    font-size: 1.2rem;
    font-weight: 600;
  }

  @media screen and (max-width: 767px) {
    color: var(--linkbrary-white);
  }
`;

const StyledFolderAddImage = styled(FolderAddImage)`
  width: 1.6rem;
  height: 1.6rem;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const StyledFolderAddWhiteImage = styled(FolderAddWhiteImage)`
  display: none;
  @media screen and (max-width: 767px) {
    display: block;
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const StyledFolderListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.2rem;
`;

const StyledFolderListInnerBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`;
