import * as S from "./ModalEdit.style";
import closeIcon from "assets/images/closeImg.svg";
import Input from 'components/Input';
import Button from 'components/Button';

function ModalEdit() {
  return(
    <>
      <S.ModalBackdrop></S.ModalBackdrop>
      <S.ModalContainer>
        <S.ModalCloseButton src={closeIcon} alt="모달창 닫기" />
        <S.ModalWrapper>
          <S.ModalTitle>폴더 이름 변경</S.ModalTitle>
          <Input/>
          <Button>추가하기</Button>
        </S.ModalWrapper>
      </S.ModalContainer>
    </>
  );
}

export default ModalEdit;