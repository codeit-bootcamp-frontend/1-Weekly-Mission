import styled from "styled-components";
import { modalState } from "../../recoil/modal";
import { useRecoilValue, useResetRecoilState } from "recoil";

import { useState } from "react";
import CloseIcon from "@/public/assets/modal/img_closeIcon.png";
import CheckIcon from "@/public/assets/modal/img_checkIcon.png";
import Image from "next/image";
import DefaultBtn from "../button/Button";
import { ModalMainContainer } from "./ModalStyledComponents";

const AddToFolderModal = () => {
  const { addToFolderModal } = useRecoilValue(modalState);
  const resetModalState = useResetRecoilState(modalState);

  const [selectedFolder, setSelectedFolder] = useState<number>();

  return (
    <ModalMainContainer>
      <Image
        src={CloseIcon}
        className="closeIcon"
        alt="closeIcon"
        onClick={resetModalState}
        width="24"
        height="24"
      />

      <div className="modalTitleContainer">
        <div className="title">폴더에 추가</div>
        <div className="link">{addToFolderModal.link}</div>
      </div>

      <div className="modalContentContainer">
        {addToFolderModal.content.map((e) => {
          return (
            <FolderContainer
              $active={e.id === selectedFolder}
              key={e.id}
              onClick={() => setSelectedFolder(e.id)}
            >
              <div className="title">{e.name}</div>
              <div className="linkNum">{e.link.count}개 링크</div>
              <Image
                width="14"
                height="14"
                src={CheckIcon}
                className="checkIcon"
                alt="checkIcon"
              />
            </FolderContainer>
          );
        })}
      </div>

      <DefaultBtn onClick={resetModalState} type={"default"}>
        추가하기
      </DefaultBtn>
    </ModalMainContainer>
  );
};

export default AddToFolderModal;

const FolderContainer = styled.div<{ $active: boolean }>`
  display: flex;
  gap: 0.8rem;
  padding: 0.8rem;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  align-items: center;
  border-radius: ${(props) => (props.$active ? "0.8rem" : "0")};
  background: ${(props) => (props.$active ? "#f0f6ff" : "#fff")};

  .title {
    color: ${(props) => (props.$active ? "#6D6AFE" : "var(--gray100)")};
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
  }

  .linkNum {
    color: var(--gray60);
    font-size: 1.4rem;
    font-weight: 400;
  }

  .checkIcon {
    margin-left: auto;
    display: ${(props) => (props.$active ? "flex" : "none")};
  }
`;
