import {
  CloseButton,
  ModalFolderRedButton,
  ModalSubTitle,
  ModalTitle,
  ModalTitleContainer,
} from '../../styles/ModalStyle';
import close_button from '../../assets/svg/close.svg';

function LinkDeleteModal({ onCloseModal }, link) {

  return (
    <>
      <CloseButton src={close_button} alt='모달 닫기 버튼' onClick={onCloseModal} />
      <ModalTitleContainer>
        <ModalTitle>링크 삭제</ModalTitle>
        <ModalSubTitle>{link}</ModalSubTitle>
      </ModalTitleContainer>
      <ModalFolderRedButton>삭제하기</ModalFolderRedButton>
    </>
  );
}

export default LinkDeleteModal;
