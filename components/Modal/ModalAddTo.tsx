import { useState, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import CheckImage from "@/public/images/check.svg";
import CloseImage from "@/public/images/close.svg";
import Button from "../Button/Button";
import { FolderItem, SampleFolderItem } from "@/types/api";

interface ModalAddToProps {
  modalOpen: boolean;
  title: string;
  btnColor: string;
  btnText: string;
  description: string;
  setModalOpen: (value: boolean) => void;
  folderData: FolderItem[] | undefined;
}

interface FolderLinkProps {
  name: string;
  count: number;
  handleCheckFolder: (value: number) => void;
  id: number;
  selectedFolderId: number;
}

const FolderLink = ({
  name,
  count,
  handleCheckFolder,
  id,
  selectedFolderId,
}: FolderLinkProps) => {
  return (
    <StyledFolderLinkBox
      $selected={selectedFolderId === id}
      onClick={() => handleCheckFolder(id)}
    >
      <StyledFolderLinkInnerBox>
        <div>
          <p>{name}</p>
          <p>{count}개 링크</p>
        </div>
        {selectedFolderId === id && <StyledCheckImage />}
      </StyledFolderLinkInnerBox>
    </StyledFolderLinkBox>
  );
};

const ModalAddTo = ({
  modalOpen,
  title,
  btnColor,
  btnText,
  description,
  setModalOpen,
  folderData,
}: ModalAddToProps) => {
  const outside = useRef<HTMLDivElement>(null);

  const [selectedFolderId, setSelectedFolderId] = useState(0);
  const handleCheckFolder = (id: number) => {
    setSelectedFolderId(id);
  };

  return (
    <>
      {modalOpen &&
        createPortal(
          <>
            <StyledBackground
              ref={outside}
              onClick={(e) => {
                if (e.target == outside.current) setModalOpen(false);
              }}
            ></StyledBackground>
            <StyledModalBox>
              <StyledModalFrameBox>
                <h2>{title}</h2>
                <StyledModalInnerBox>
                  <p>{description}</p>
                  <StyledFolderLinkOverflowBox>
                    {folderData &&
                      folderData.map((folder) => (
                        <FolderLink
                          selectedFolderId={selectedFolderId}
                          key={folder.id}
                          name={folder.name}
                          count={folder.link.count}
                          handleCheckFolder={handleCheckFolder}
                          id={folder.id}
                        />
                      ))}
                  </StyledFolderLinkOverflowBox>
                  <Button text={btnText} size="long" buttonColor={btnColor} />
                </StyledModalInnerBox>
              </StyledModalFrameBox>
              <StyledModalCloseButton onClick={() => setModalOpen(false)}>
                <CloseImage alt="CLOSE" />
              </StyledModalCloseButton>
            </StyledModalBox>
          </>,
          document.querySelector("#modal-root") as HTMLDivElement
        )}
    </>
  );
};

export default ModalAddTo;

interface StyledFolderLinkBoxItem {
  $selected: boolean;
}

const StyledBackground = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.56);
`;

const StyledModalBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  width: 36rem;
  height: 23.9rem;
  flex-shrink: 0;
`;

const StyledModalCloseButton = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;

const StyledModalFrameBox = styled.div`
  display: inline-flex;
  padding: 3.2rem 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  border-radius: 1.5rem;
  border: 1px solid var(--linkbrary-gray-20);
  background-color: var(--linkbrary-white);

  h2 {
    color: var(--linkbrary-gray-100);
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

const StyledModalInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  p {
    color: var(--linkbrary-gray-60);
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
  }
`;

const StyledFolderLinkInnerBox = styled.div`
  display: flex;
  width: 264px;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  p:first-child {
    color: var(--linkbrary-gray-100);

    /* Linkbrary/body1-regular */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
  p:last-child {
    color: var(--linkbrary-gray-60);

    /* Linkbrary/body2-regular */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const StyledFolderLinkBox = styled.div<StyledFolderLinkBoxItem>`
  display: flex;
  padding: 8px;
  align-items: flex-start;
  gap: 8px;

  cursor: pointer;
  border-radius: 8px;
  &:hover {
    background: var(--linkbrary-bg);
    ${StyledFolderLinkInnerBox} {
      p:first-child {
        color: var(--linkbrary-primary-color);
      }
    }
  }

  background: ${({ $selected }) =>
    $selected ? "var(--linkbrary-bg)" : "#FFFFFF"};

  ${StyledFolderLinkInnerBox} {
    p:first-child {
      color: ${({ $selected }) =>
        $selected
          ? "var(--linkbrary-primary-color)"
          : "var(--linkbrary-gray-100)"};
    }
  }
`;

const StyledFolderLinkOverflowBox = styled.div`
  max-height: 16rem;
  overflow-y: scroll;
`;

const StyledCheckImage = styled(CheckImage)`
  float: right;
`;
