import Button from 'components/Button';
import * as S from "./Modal.style";

function Modal({}) {
  return(
    <>
      <S.ModalBackdrop></S.ModalBackdrop>
      <S.ModalContainer>
        {/* <S.ModalCloseButton></S.ModalCloseButton> */}
        <S.ModalWrapper>
          <S.ModalTitle>폴더 이름 변경</S.ModalTitle>
          <Button>추가하기</Button>
        </S.ModalWrapper>
      </S.ModalContainer>
    </>
  );
}

export default Modal;