import { CloseButton, InputContainer, ModalFolderButton, ModalInput, ModalTitle } from '../../styles/ModalStyle';
import close_button from '../../assets/svg/close.svg';

function FolderToAddModal({ onCloseModal }) {

  return (
    <>
      <CloseButton src={close_button} alt='모달 닫기 버튼' onClick={onCloseModal} />
      <ModalTitle>폴더에 추가</ModalTitle>
      <InputContainer>
        <ModalInput placeholder='내용 입력' />
      </InputContainer>
      <ModalFolderButton>추가하기</ModalFolderButton>
    </>
  );
}

export default FolderToAddModal;
