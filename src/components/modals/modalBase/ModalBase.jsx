import * as S from "./modalBase.style.js";
import closeIconSrc from "assets/icons/close.svg";

export default function ModalBase({ children, title, onClickClose }) {
  return (
    <S.ModalBaseWrapper
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <S.ModalCloseButton onClick={onClickClose}>
        <img src={closeIconSrc} alt="모달 닫기 버튼 이미지" />
      </S.ModalCloseButton>
      <S.ModalTitle>{title}</S.ModalTitle>
      {children}
    </S.ModalBaseWrapper>
  );
}
