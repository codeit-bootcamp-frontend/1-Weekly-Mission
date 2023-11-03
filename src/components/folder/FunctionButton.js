import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import shareImg from "../../image/share.svg";
import penImg from "../../image/pen.svg";
import deleteImg from "../../image/delete.svg";
import ChangeNameModal from "./modal/ChangeNameModal";
import DeleteFolderModal from "./modal/DeleteFolderModal";

const FunctionButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // 버튼에 따른 모달 열기

  const openModal = (type) => {
    setIsModalOpen(true);
    setModalType(type); // 버튼 종류 저장
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <FuncBtnWrapper>
      <FuncBtn onClick={() => openModal("share")}>
        <FuncBtnImg src={shareImg} alt="공유 버튼" />
        <FuncBtnMsg>공유</FuncBtnMsg>
      </FuncBtn>
      <FuncBtn onClick={() => openModal("changeName")}>
        <FuncBtnImg src={penImg} alt="이름 변경 버튼" />
        <FuncBtnMsg>이름 변경</FuncBtnMsg>
      </FuncBtn>
      <FuncBtn onClick={() => openModal("delete")}>
        <FuncBtnImg src={deleteImg} alt="삭제 버튼" />
        <FuncBtnMsg>삭제</FuncBtnMsg>
      </FuncBtn>

      {modalType === "changeName" && (
        <ChangeNameModal isOpen={isModalOpen} onRequestClose={closeModal} />
      )}
      {modalType === "delete" && (
        <DeleteFolderModal isOpen={isModalOpen} onRequestClose={closeModal} />
      )}
    </FuncBtnWrapper>
  );
};

const FuncBtnWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const FuncBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;

  border: none;
  background-color: var(--linkbrary-white);
  cursor: pointer;
`;

const FuncBtnImg = styled.img`
  width: 18px;
  height: 18px;
`;

const FuncBtnMsg = styled.span`
  color: var(--linkbrary-gray-2);
  font-size: 14px;
  font-weight: 600;
`;

export default FunctionButton;
