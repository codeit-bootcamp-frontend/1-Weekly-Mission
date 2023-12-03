import { useState } from "react";
import styled from "styled-components";
import deleteImg from "@/src/image/delete.svg";
import penImg from "@/src/image/pen.svg";
import shareImg from "@/src/image/share.svg";
import ChangeNameModal from "../modal/ChangeNameModal";
import DeleteFolderModal from "../modal/DeleteFolderModal";
import ShareFolderModal from "../modal/ShareFolderModal";
import Image from "next/image";

interface FunctionButtonProps {
  selectedFolderId: number | null;
  selectedFolderName?: string;
}

const FunctionButton = ({ selectedFolderId, selectedFolderName }: FunctionButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string>(""); // 버튼에 따른 모달 열기
  const CURRENT_URL = `/shared?user=1&folder=${selectedFolderId}`;

  const openModal = (type: string) => {
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

      {modalType === "share" && <ShareFolderModal isOpen={isModalOpen} onRequestClose={closeModal} name={selectedFolderName} currentUrl={CURRENT_URL} />}
      {modalType === "changeName" && <ChangeNameModal isOpen={isModalOpen} onRequestClose={closeModal} />}
      {modalType === "delete" && <DeleteFolderModal isOpen={isModalOpen} onRequestClose={closeModal} name={selectedFolderName} />}
    </FuncBtnWrapper>
  );
};

const FuncBtnWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
`;

const FuncBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  border: none;
  background-color: var(--linkbrary-white);
  cursor: pointer;
`;

const FuncBtnImg = styled(Image)`
  width: 1.8rem;
  height: 1.8rem;
`;

const FuncBtnMsg = styled.span`
  color: var(--gray20);
  font-size: 1.4rem;
  font-weight: 600;
`;

export default FunctionButton;
