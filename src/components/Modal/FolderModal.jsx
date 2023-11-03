import styled from 'styled-components';
import { Button } from '../../styles/Button';
import close_button from '../../assets/svg/close.svg';

const FOLDER_MODAL_ACTION = {
  edit: {
    title: '폴더 이름 변경',
    placeholder: '유용한 팁',
    buttonTitle: '변경하기'
  },
  addFolder: {
    title: '폴더 추가',
    placeholder: '내용 입력',
    buttonTitle: '추가하기'
  },
  deleteFolder: {
    title: '폴더 삭제',
    placeholder: '',
    buttonTitle: '삭제하기'
  },
  deleteLink: {
    title: '링크 삭제',
    placeholder: '',
    buttonTitle: '삭제하기'
  }
};

function FolderModal({ action, onCloseModal }) {
  return (
    <>
      <BackDrop />
      <ModalBody>
        <CloseButton src={close_button} alt='모달 닫기 버튼' onClick={onCloseModal}/>
        <ModalTitle>{FOLDER_MODAL_ACTION[action].title}</ModalTitle>
        <InputContainer>
          <ModalInput placeholder={FOLDER_MODAL_ACTION[action].placeholder} />
        </InputContainer>
        <ModalFolderButton>{FOLDER_MODAL_ACTION[action].buttonTitle}</ModalFolderButton>
      </ModalBody>
    </>
  );
}

export default FolderModal;

const BackDrop = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.40);
`;

const ModalBody = styled.div`
  display: inline-flex;
  position: fixed;
  z-index: 5;
  top: 50%;
  left: 50%;
  width: 36rem;
  height: 23.8rem;
  transform: translate(-50%, -50%);
  padding: 3.2rem 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  border-radius: 15px;
  border: 1px solid #CCD5E3;
  background: #FFF;
`;

const CloseButton = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  left: 32rem;
  top: 1.6rem;
  cursor: pointer;
`;

const ModalTitle = styled.h1`
  color: #373740;
  font-family: Pretendard, sans-serif;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  width: 100%;
`;

const ModalInput = styled.input`
  display: flex;
  width: 100%;
  padding: 1.8rem 1.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #6D6AFE;
  background: #FFF;

  &:focus::placeholder {
    color: transparent;
  }
`;

const ModalFolderButton = styled(Button)`
  width: 100%;
  font-size: 1.6rem;
  padding: 1.6rem 2rem;
`;
