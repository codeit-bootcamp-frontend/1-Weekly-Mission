import * as S from "./ModalAddFolder.style";
import closeIcon from "assets/images/closeImg.svg";

function ModalAddFolder() {
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

export default ModalAddFolder;