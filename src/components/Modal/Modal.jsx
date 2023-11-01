import { createPortal } from "react-dom";
import * as S from "./Modal.style";
import closeButton from "images/_close.svg";

export default function Modal({ close, children }) {
  return createPortal(
    <div>
      <S.Overlay onClick={close} />
      <S.Container>
        <S.CloseButton onClick={close}>
          <img src={closeButton} alt="모달 닫기 버튼" />
        </S.CloseButton>
        {children}
      </S.Container>
    </div>,
    document.querySelector("#modal")
  );
}

export function ModalEdit() {
  return (
    <>
      <S.Title>폴더 이름 변경</S.Title>
      <S.Form>
        <S.Input />
        <S.SubmitButton>변경하기</S.SubmitButton>
      </S.Form>
    </>
  );
}

export function ModalFolder() {
  return (
    <>
      <S.Title>폴더 추가</S.Title>
      <S.Form>
        <S.Input />
        <S.SubmitButton>추가하기</S.SubmitButton>
      </S.Form>
    </>
  )
}