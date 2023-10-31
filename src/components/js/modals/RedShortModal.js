import ModalBg from "./modal-styles/ModalBg";
import * as S from "./modal-styles/ModalsUnits";

function RedShortModal({ ...props }) {
  return (
    <ModalBg>
      <S.Wrapper>
        <S.CloseButton />
        <S.ModalTitle>{props.title}</S.ModalTitle>
        <S.ModalContents>{props.content}</S.ModalContents>
        <S.StyledButton red>{props.btnName}</S.StyledButton>
      </S.Wrapper>
    </ModalBg>
  );
}

export default RedShortModal;
