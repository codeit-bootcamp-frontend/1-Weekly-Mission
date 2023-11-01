import styled from "styled-components";
import ModalBg from "./modal-styles/ModalBg";
import * as S from "./modal-styles/ModalsUnits";

function BlueShortModal({ title, btnName, onClose, ...props }) {
  return (
    <ModalBg>
      <S.Wrapper>
        <S.CloseButton onClick={onClose} />
        <S.TitleWrapper>
          <S.ModalTitle>{title}</S.ModalTitle>
        </S.TitleWrapper>
        <S.ModalInput />
        <S.StyledButton>{btnName}</S.StyledButton>
      </S.Wrapper>
    </ModalBg>
  );
}

export default BlueShortModal;
