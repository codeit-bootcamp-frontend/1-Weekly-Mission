import styled from 'styled-components';
import closeButton from '../../assets/close_icon.svg';
import { useState } from 'react';
import EditModal from './type/EditModal';

function ModalBox({ modal, children = modal, closeModal }) {
  const handleClick = () => {
    closeModal();
  };

  return (
    <Container>
      <Button onClick={handleClick}>
        <Icon src={closeButton} alt="창닫기 아이콘" />
      </Button>
      <P>{children}</P>
      {modal === '폴더 이름 변경' && <EditModal />}
      {/* {modal === '폴더 추가' && <AddModal />}
      {modal === '폴더 공유' && <ShareModal />}
      {modal === '폴더 삭제' && <DeleteFolderModal />}
      {modal === '링크 삭제' && <DeleteLinkModal />}
      {modal === '폴더에 추가' && <AddFolderModal />} */}
    </Container>
  );
}

const Container = styled.div`
  display: inline-flex;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 15px;
  border: 1px solid var(--gray20);
  background: var(--white);
  z-index: 3;
`;

const Button = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
`;

const Icon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

const P = styled.p`
  color: var(--black);
  font-size: 2rem;
  font-weight: 700;
`;

export default ModalBox;
