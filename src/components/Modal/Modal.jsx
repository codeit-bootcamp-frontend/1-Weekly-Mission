import { useState } from "react";
import styled from "styled-components";
import { cursorPointer, flexCenter } from "../../style/common";
import colors from "../../style/colors";
import cancelIcon from "../../assets/modal/_close.png";
import { createPortal } from "react-dom";

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContainer = styled.div`
  position: relative;
  ${flexCenter};
  padding: 32px 40px;
  width: 360px;
  height: 239px;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  border-radius: 15px;
  border: 1px solid ${colors.gray20};
  background: ${colors.white};
`;

const ModalTitle = styled.div`
  color: ${colors.gray100};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ModalInput = styled.input`
  border-radius: 8px;
  border: 1px solid ${colors.gray20};
  background: ${colors.white};
  display: flex;
  width: 280px;
  padding: 18px 15px;
  justify-content: center;
  align-items: center;
`;

const ModalButton = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  ${cursorPointer}

  background: ${({ red }) => (red ? colors.red : colors.purpleBlueToSkyBlue)};

  color: ${colors.white};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
`;
const ModalDetail = styled.div`
  color: ${colors.gray60};
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`;

const ModalCancelIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 18px;
  top: 20px;
  ${cursorPointer}
`;

function Modal({
  title,
  buttonText,
  setIsModalOpen,
  red,
  hasInput,
  hasDetail,
  folderName,
}) {
  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalCancelIcon
          src={cancelIcon}
          onClick={() => setIsModalOpen(false)}
        />
        <ModalTitle>{title}</ModalTitle>
        {hasInput && <ModalInput placeholder="내용 입력"></ModalInput>}
        {hasDetail && <ModalDetail>{folderName}</ModalDetail>}
        <ModalButton red={red}>{buttonText}</ModalButton>
      </ModalContainer>
    </ModalWrapper>
  );
}

export const ModalMaker = ({ feature, setIsModalOpen, folderName }) => {
  let modal;
  switch (feature) {
    case "이름 변경":
      modal = (
        <Modal
          title="폴더 이름 변경"
          buttonText="변경하기"
          hasInput
          setIsModalOpen={setIsModalOpen}
        />
      );
      break;
    case "폴더 추가 +":
      modal = (
        <Modal
          title="폴더 추가"
          buttonText="추가하기"
          hasInput
          setIsModalOpen={setIsModalOpen}
        />
      );
      break;
    case "공유":
      modal = <Modal title="폴더 공유" setIsModalOpen={setIsModalOpen} />;
      break;

    case "삭제":
      modal = (
        <Modal
          title="폴더 삭제"
          buttonText="삭제하기"
          hasDetail
          red
          folderName={folderName}
          setIsModalOpen={setIsModalOpen}
        />
      );
      break;
    case "삭제하기":
      modal = (
        <Modal
          title="링크 삭제"
          buttonText="삭제하기"
          red
          setIsModalOpen={setIsModalOpen}
        />
      );
      break;
    case "폴더에 추가":
      modal = <Modal setIsModalOpen={setIsModalOpen} />;
      break;
  }
  return modal;
};

export default Modal;
