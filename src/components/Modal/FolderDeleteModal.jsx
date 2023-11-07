import {
  CloseButton,
  ModalFolderRedButton,
  ModalSubTitle,
  ModalTitle,
  ModalTitleContainer,
} from '../../styles/ModalStyle';
import close_button from '../../assets/svg/close.svg';

function FolderDeleteModal({ onCloseModal, name }) {
  return (
    <>
      <CloseButton src={close_button} alt='모달 닫기 버튼' onClick={onCloseModal} />
      <ModalTitleContainer>
        <ModalTitle>폴더 삭제</ModalTitle>
        <ModalSubTitle>{name}</ModalSubTitle>
      </ModalTitleContainer>
      <ModalFolderRedButton>삭제하기</ModalFolderRedButton>
    </>
  );
}

export default FolderDeleteModal;
