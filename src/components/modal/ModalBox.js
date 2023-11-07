import styled from 'styled-components';
import closeButton from '../../assets/close_icon.svg';
import InputModal from './type/InputModal';
import ShareModal from './type/ShareModal';
import DeleteModal from './type/DeleteModal';
import AddModal from './type/AddModal';

function ModalBox({ modal, closeModal, folderTitle, link, folderId, userID, selectedFolder }) {
  const currentPath = `/shared?user=${userID}&folder=${folderId}`;

  const handleClick = () => {
    closeModal();
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  if (modal === '삭제하기') {
    modal = '링크 삭제';
  }

  return (
    <Background onClick={handleClick}>
      <Container onClick={handleModalClick}>
        <Button onClick={handleClick}>
          <Icon src={closeButton} alt="창닫기 아이콘" />
        </Button>
        <P>{modal}</P>
        {modal === '폴더 공유' && <ShareModal subTitle={folderTitle} currentPath={currentPath} />}
        {modal === '폴더 이름 변경' && <InputModal title="변경하기" />}
        {modal === '폴더 삭제' && <DeleteModal subTitle={folderTitle} modal={modal} />}
        {modal === '폴더 추가' && <AddModal selectedFolder={selectedFolder} />}
        {modal === '링크 삭제' && <DeleteModal subTitle={link} modal={modal} />}
        {modal === '폴더에 추가' && <InputModal title="추가하기" />}
      </Container>
    </Background>
  );
}

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.08);
  z-index: 3;
`;

const Container = styled.div`
  display: inline-flex;
  padding: 32px 40px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 15px;
  border: 1px solid var(--gray20);
  background: var(--white);
  z-index: 4;
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
