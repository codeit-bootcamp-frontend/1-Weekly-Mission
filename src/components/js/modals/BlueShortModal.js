import styled from "styled-components";
import ModalBg from "./modal-styles/ModalBg";
import * as S from "./modal-styles/ModalsUnits";

function BlueShortModal({ title, btnName, ...props }) {
  return (
    <ModalBg>
      <S.Wrapper>
        <S.CloseButton />
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.ModalInput />
        <S.StyledButton>{btnName}</S.StyledButton>
      </S.Wrapper>
    </ModalBg>
  );
}

export default BlueShortModal;
