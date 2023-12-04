import ModalBg from "./modal-styles/ModalBg";
import * as S from "./modal-styles/ModalsUnits";

function RedShortModal({ onClose, ...props }: any) {
  return (
    <ModalBg>
      <S.Wrapper>
        <S.CloseButton onClick={onClose} />
        <S.TitleWrapper>
          <S.ModalTitle>{props.title}</S.ModalTitle>
          <S.ModalContents>{props.content}</S.ModalContents>
        </S.TitleWrapper>
        <S.StyledButton red>{props.btnName}</S.StyledButton>
      </S.Wrapper>
    </ModalBg>
  );
}

export default RedShortModal;
