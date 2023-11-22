import * as S from "./ModalDeleteLink.style";
import closeIcon from "assets/images/closeImg.svg";

function ModalDeleteLink() {
  return(
    <>
      <S.ModalBackdrop></S.ModalBackdrop>
      <S.ModalContainer>
        <S.ModalCloseButton src={closeIcon} alt="모달창 닫기" />
        <S.ModalWrapper>
          <S.ModalTitle>폴더 이름 변경</S.ModalTitle>
        </S.ModalWrapper>
      </S.ModalContainer>
    </>
  );
}

export default ModalDeleteLink;