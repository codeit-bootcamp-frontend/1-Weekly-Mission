import * as S from "./Modal.style";
import closeButton from "images/close.svg";

function Modal({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <S.Container>
        <S.CloseButton>
          <img src={closeButton} alt="모달 닫기 버튼" />
        </S.CloseButton>
        <S.Title>폴더 이름 변경</S.Title>
        <S.Form>
          <S.Input />
          <S.SubmitButton>변경하기</S.SubmitButton>
        </S.Form>
      </S.Container>
    </>
  );
}

export default Modal;
