import { useState, useEffect } from "react";
import styled from "styled-components";
import addPurpleImg from "../../image/add.svg";
import addWhiteImg from "../../image/addWhite.svg";
import AddFolderModal from "../modal/AddFolderModal";

const AddFolderButton = () => {
  const [addImg, setAddImg] = useState(addPurpleImg);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setAddImg(addWhiteImg);
    } else {
      setAddImg(addPurpleImg);
    }
  };

  const openModal = (type) => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    handleResize();

    // 윈도우의 resize 이벤트에 handleResize 함수를 추가하여 화면 크기가 변경될 때마다 실행되도록 함
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <AddFolderBtn onClick={openModal}>
        <AddFolderMsg>폴더 추가</AddFolderMsg>
        <AddFolderImg src={addImg} alt="폴더 추가 버튼" />
      </AddFolderBtn>
      <AddFolderModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </>
  );
};

const AddFolderBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  border: none;
  background-color: var(--linkbrary-white);

  @media (max-width: 767px) and (min-width: 375px) {
    display: flex;
    padding: 0.8rem 2.4rem;
    align-items: flex-start;
    gap: 2rem;

    position: fixed;
    bottom: 10.1rem;
    left: 39%;

    border-radius: 2rem;
    border: 0.1rem solid var(--linkbrary-white);
    background: var(--primary);

    z-index: 3;
  }
`;

const AddFolderMsg = styled.span`
  color: var(--primary);
  text-align: center;
  font-size: 1.6rem;
  font-weight: 500;

  @media (max-width: 767px) and (min-width: 375px) {
    color: var(--linkbrary-white);
  }
`;

const AddFolderImg = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

export default AddFolderButton;
