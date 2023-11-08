import * as Styled from "./StyledModal";

const ModalAdd = ({ modalClose }) => {
  return (
    <Styled.ModalBackground>
      <Styled.Modal>
        <Styled.ModalLabel>폴더 추가</Styled.ModalLabel>
        <Styled.ModalInput placeholder="내용 입력" />
        <Styled.ModalBtn>추가하기</Styled.ModalBtn>
        <Styled.ModalCloseBtn onClick={modalClose} />
      </Styled.Modal>
    </Styled.ModalBackground>
  );
};

export default ModalAdd;
