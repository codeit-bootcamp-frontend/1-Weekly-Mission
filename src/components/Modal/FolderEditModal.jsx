import { CloseButton, InputContainer, ModalFolderButton, ModalInput, ModalTitle } from '../../styles/ModalStyle';
import close_button from '../../assets/svg/close.svg';

function FolderEditModal({ onCloseModal }) {

  return (
    <>
      <CloseButton src={close_button} alt='모달 닫기 버튼' onClick={onCloseModal} />
      <ModalTitle>폴더 이름 변경</ModalTitle>
      <InputContainer>
        <ModalInput placeholder='유용한 팁' />
      </InputContainer>
      <ModalFolderButton>변경하기</ModalFolderButton>
    </>
  );
}

export default FolderEditModal;
