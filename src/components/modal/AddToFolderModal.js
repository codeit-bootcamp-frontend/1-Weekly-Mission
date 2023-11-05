import styled from "styled-components";
import { modalState } from "../../recoil/modal";
import { useRecoilValue, useResetRecoilState } from "recoil";
import DefaultBtn, { DefaultBtnContainer } from "../btn/DefaultBtn";
import { useState } from "react";
import CloseIcon from "../../assets/modal/img_modalClose.svg";
import CheckIcon from "../../assets/modal/img_modalCheck.svg";
import { OuterModalContainer, Overlay } from "./ModalStyledComponents";

const FolderArr = [
  {
    id: 1,
    title: "코딩팁",
    num: 7,
  },
  {
    id: 2,
    title: "채용 사이트",
    num: 12,
  },
  {
    id: 3,
    title: "유용한 글",
    num: 30,
  },
  {
    id: 4,
    title: "나만의 장소",
    num: 3,
  },
];

const AddToFolderModal = () => {
  const { addToFolderModal } = useRecoilValue(modalState);
  const resetModalState = useResetRecoilState(modalState);

  const [selectedFolder, setSelectedFolder] = useState();

  return (
    <Overlay>
      <OuterModalContainer onClick={resetModalState} />

      <ModalMain>
        <img
          src={CloseIcon}
          className="closeIcon"
          alt="closeIcon"
          onClick={resetModalState}
        />

        <div className="modalTitleContainer">
          <div className="title">폴더에 추가</div>
          <div className="link">{addToFolderModal.link}</div>
        </div>

        <div className="modalContentContainer">
          {FolderArr.map((e) => {
            return (
              <FolderContainer
                $active={e.id === selectedFolder}
                key={e.id}
                onClick={() => setSelectedFolder(e.id)}
              >
                <div className="title">{e.title}</div>
                <div className="linkNum">{e.num}개 링크</div>
                <img src={CheckIcon} className="checkIcon" alt="checkIcon" />
              </FolderContainer>
            );
          })}
        </div>

        <DefaultBtn onClick={resetModalState}>추가하기</DefaultBtn>
      </ModalMain>
    </Overlay>
  );
};

export default AddToFolderModal;

const ModalMain = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 36rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 1.5rem;
  border: 1px solid #dee2e6;
  padding: 3.2rem 4rem;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

  .closeIcon {
    position: absolute;
    top: 2.5rem;
    right: 2.5rem;
    cursor: pointer;
  }

  .modalTitleContainer {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    .title {
      color: var(--gray100);
      font-size: 2rem;
      font-weight: 700;
    }

    .link {
      color: var(--gray60);
      text-align: center;
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 2.2rem;
    }
  }

  .modalContentContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  ${DefaultBtnContainer} {
    width: 100%;
    font-size: 1.6rem;
  }
`;

const FolderContainer = styled.div`
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
