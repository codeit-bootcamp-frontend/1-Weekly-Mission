import styled from 'styled-components';
import closeImg from '../../assets/images/_close.svg';
import Rename from '../modal/Rename';
import AddFolderModal from '../modal/AddFolderModal';
import DeleteModal from '../modal/DeleteModal';
import ShareFolder from '../modal/ShareFolder';
import DeleteLinkModal from '../modal/DeleteLinkModal';
import AddLinkModal from '../modal/AddLinkModal';

const Modals = {
  '폴더 이름 변경': Rename,
  '폴더 추가': AddFolderModal,
  '폴더 삭제': DeleteModal,
  '폴더 공유': ShareFolder,
  '링크 삭제': DeleteLinkModal,
  '폴더에 추가': AddLinkModal,
};

export default function Modal({
  isOpen,
  onModalClose,
  currentModal,
  currentFolder,
  userFolder,
}) {
  console.log('modal: ', userFolder);
  if (!isOpen) {
    return <></>;
  } else {
    const ModalType = Modals[currentModal.name];
    return (
      <ModalBackground>
        <Container>
          <Close src={closeImg} onClick={onModalClose}></Close>
          <Title>{currentModal.name}</Title>
          <ModalType
            currentFolder={currentFolder}
            link={currentModal.link}
            userFolder={userFolder}
          />
        </Container>
      </ModalBackground>
    );
  }
}

const ModalBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 4;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 40px;
  background-color: var(--linkbrary-white);
  border-radius: 15px;
`;

const Close = styled.img`
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
